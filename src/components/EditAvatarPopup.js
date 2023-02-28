import {useRef, useEffect} from "react";
import useInput from "../hooks/useInput";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  onCloseByEscEndOverlay,
  isLoading,
  buttonText,
  buttonLoadingText,
}) {
  const link = useInput("", {isEmpty: true, minLength: 2, isLink: true});

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: link.value,
    });
    link.setValue("");
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="type_img"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCloseByEscEndOverlay={onCloseByEscEndOverlay}
    >
      <div className="popup__input-wrap">
        <input
          className="popup__input popup__card-link"
          name="avatar"
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
        disabled={!link.isValid}
      >
        {isLoading ? buttonLoadingText : buttonText}
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
