import {useContext, useState, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  onCloseByEscEndOverlay,
  isLoading,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="type_profile"
      buttonText="Сохранить"
      buttonLoadingText="Обновляем данные..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCloseByEscEndOverlay={onCloseByEscEndOverlay}
      isLoading={isLoading}
    >
      <div className="popup__input-wrap">
        <input
          type="text"
          id="profile-name"
          className="popup__input popup__profile-name"
          name="name"
          defaultValue={name}
          onChange={handleChangeName}
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
          defaultValue={description}
          onChange={handleChangeDescription}
          placeholder="Расскажите о себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
