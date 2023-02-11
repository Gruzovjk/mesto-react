import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_type_profile">
        <div className="popup__container">
          <div className="popup__form">
            <form className="popup__set" name="profile" noValidate>
              <h2 className="popup__title">Редактировать профиль</h2>
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
              <button type="submit" className="popup__save-button">
                Сохранить
              </button>
            </form>
          </div>
          <button type="button" className="popup__close-button"></button>
        </div>
      </div>

      <div className="popup popup_type_card-add">
        <div className="popup__container">
          <div className="popup__form">
            <form className="popup__set" name="card" noValidate>
              <h2 className="popup__title">Новое место</h2>
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
              <button type="submit" className="popup__save-button">
                Создать
              </button>
            </form>
          </div>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>

      <div className="popup popup_type_img">
        <div className="popup__container popup__container-img">
          <img src="#" alt="Какая-то картинка" className="popup__img" />
          <p className="popup__img-caption"></p>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>

      <div className="popup popup_type_update-avatar">
        <div className="popup__container">
          <div className="popup__form">
            <form className="popup__set" name="avatar" noValidate>
              <h2 className="popup__title">Обновить аватар</h2>
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
              <button type="submit" className="popup__save-button">
                Сохранить
              </button>
            </form>
          </div>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>

      <div className="popup popup_type_confirm-remove">
        <div className="popup__container">
          <form className="popup__set">
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="popup__save-button">
              Да
            </button>
          </form>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>
    </>
  );
}

export default App;
