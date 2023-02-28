import {useState} from "react";
import useInput from "../hooks/useInput";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
  isOpen,
  onClose,
  onUpdatePlace,
  onCloseByEscEndOverlay,
  isLoading,
  buttonText,
  buttonLoadingText,
}) {
  const name = useInput("", {isEmpty: true, minLength: 2, maxLength: 40});
  const link = useInput("", {isEmpty: true, minLength: 2, isLink: true});

  function handleSubmit(e) {
    e.preventDefault();
    onUpdatePlace({
      name: name.value,
      src: link.value,
    });
    name.setValue("собака");
    link.setValue("сутулая");
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card-add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCloseByEscEndOverlay={onCloseByEscEndOverlay}
    >
      <div className="popup__input-wrap">
        <input
          className="popup__input popup__card-name"
          name="name"
          placeholder="Название места"
          maxLength="40"
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
            `Максимум 40 знаков`}
        </span>
      </div>
      <div className="popup__input-wrap">
        <input
          className="popup__input popup__card-link"
          name="src"
          placeholder="Ссылка на фото (формата .jpg, .gif или .png)"
          value={link.value}
          onChange={link.onChange}
          onBlur={link.onBlur}
          style={{
            borderColor: !link.isValid && link.isDirty ? "red" : "",
          }}
        />
        <span className="popup__input-error">
          {link.isEmpty && link.isDirty && "Поле не может быть пустым"}
          {link.minLengthError &&
            link.isDirty &&
            !link.isEmpty &&
            "Минимум 2 знака"}
          {link.linkError &&
            link.isDirty &&
            !link.isEmpty &&
            !link.minLengthError &&
            "Ссылка должна заканчиваться на .gif/.jpeg/.jpg/.tiff/.png/.webp"}
        </span>
      </div>
      <button
        type="submit"
        className="popup__save-button"
        disabled={!name.isValid || !link.isValid}
      >
        {isLoading ? buttonLoadingText : buttonText}
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
