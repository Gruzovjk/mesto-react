import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardList]) => {
        setCurrentUser(userData);
        setCards(cardList);
      })
      .catch((err) =>
        console.log(`При получении данных произошла ошибка: ${err}`)
      );
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((item) => (item._id === card._id ? newCard : item))
        );
      })
      .catch((err) =>
        console.log(`При постановке лайка произошла ошибка: ${err}`)
      );
  }

  function handleCardRemove(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((item) => item._id !== card._id && item)
        );
      })
      .catch((err) =>
        console.log(`При удалении карточки произошла ошибка: ${err}`)
      );
  }

  function handleUpdateUser(data) {
    api
      .editUserInfo(data)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) =>
        console.log(`При обновлении данных произошла ошибка: ${err}`)
      );
  }

  function handleUpdateAvatar(data) {
    api
      .editUserAvatar(data)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) =>
        console.log(`При обновлении аватара произошла ошибка: ${err}`)
      );
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardRemove={handleCardRemove}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm
          title="Новое место"
          name="card-add"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="popup__input-wrap">
            <input
              type="text"
              id="card-name"
              className="popup__input popup__card-name"
              name="name"
              placeholder="Название места"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error"></span>
          </div>
          <div className="popup__input-wrap">
            <input
              type="url"
              pattern="([^\s]+(?=\.(jpg|gif|png|jpeg))\.\2)"
              id="card-url"
              className="popup__input popup__card-link"
              name="src"
              placeholder="Ссылка на фото (формата .jpg, .gif или .png)"
              required
            />
            <span className="popup__input-error"></span>
          </div>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        {/* <div className="popup popup_type_confirm-remove">
        <div className="popup__container">
          <form className="popup__set">
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="popup__save-button">
              Да
            </button>
          </form>
          <button className="popup__close-button" type="button" />
        </div>
      </div> */}
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
