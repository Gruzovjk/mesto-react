import {useContext, useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import useInput from "../hooks/useInput";

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  onCloseByEscEndOverlay,
  isLoading,
  buttonLoadingText,
  buttonText,
}) {
  const currentUser = useContext(CurrentUserContext);

  const name = useInput("", {
    isEmpty: true,
    minLength: 2,
    maxLength: 20,
  });
  const about = useInput("", {
    isEmpty: true,
    minLength: 2,
    maxLength: 40,
  });

  useEffect(() => {
    if (Object.keys(currentUser).length) {
      name.setValue(currentUser.name);
      about.setValue(currentUser.about);
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name.value,
      about: about.value,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="type_profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCloseByEscEndOverlay={onCloseByEscEndOverlay}
    >
      <div className="popup__input-wrap">
        <input
          className="popup__input popup__profile-name"
          name="name"
          maxLength="20"
          placeholder="Ваше имя"
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
          style={{
            borderColor: !name.isValid && name.isDirty ? "red" : "",
          }}
        />
        <span className="popup__input-error">
          {name.isEmpty && name.isDirty && "Поле не может быть пустым"}
          {name.minLengthError &&
            name.isDirty &&
            !name.isEmpty &&
            `Минимум 2 знака`}
          {name.maxLengthError &&
            name.isDirty &&
            !name.isEmpty &&
            `Максимум 20 знаков`}
        </span>
      </div>
      <div className="popup__input-wrap">
        <input
          className="popup__input popup__profile-about"
          name="about"
          maxLength="40"
          placeholder="Расскажите о себе"
          value={about.value}
          onChange={about.onChange}
          onBlur={about.onBlur}
          style={{
            borderColor: !about.isValid && about.isDirty ? "red" : "",
          }}
        />
        <span className="popup__input-error">
          {about.isEmpty && about.isDirty && "Поле не может быть пустым"}
          {about.minLengthError &&
            about.isDirty &&
            !about.isEmpty &&
            "Минимум 2 знака"}
          {about.maxLengthError &&
            about.isDirty &&
            !about.isEmpty &&
            `Максимум 40 знаков `}
        </span>
      </div>
      <button
        type="submit"
        className="popup__save-button"
        disabled={!name.isValid || !about.isValid}
      >
        {isLoading ? buttonLoadingText : buttonText}
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
