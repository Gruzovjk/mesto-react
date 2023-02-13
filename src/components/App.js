import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="type_profile"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-wrap">
          <input
            type="text"
            id="profile-name"
            className="popup__input popup__profile-name"
            name="name"
            placeholder="Ваше имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error"></span>
        </div>
        <div className="popup__input-wrap">
          <input
            type="text"
            id="profile-about"
            className="popup__input popup__profile-about"
            name="about"
            placeholder="Расскажите о себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error"></span>
        </div>
      </PopupWithForm>

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

      <PopupWithForm
        title="Обновить аватар"
        name="type_img"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-wrap">
          <input
            type="url"
            pattern="([^\s]+(?=\.(jpg|gif|png|jpeg))\.\2)"
            id="card-src"
            className="popup__input popup__card-link"
            name="avatar"
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
  );
}

export default App;
