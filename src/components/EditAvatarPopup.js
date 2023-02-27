import {useRef, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  onCloseByEscEndOverlay,
  isLoading,
}) {
  const ref = useRef();

  useEffect(() => {
    ref.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: ref.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="type_img"
      buttonText="Сохранить"
      buttonLoadingText="Обновляем аватар..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCloseByEscEndOverlay={onCloseByEscEndOverlay}
      isLoading={isLoading}
    >
      <div className="popup__input-wrap">
        <input
          type="url"
          pattern="([^\s]+(?=\.(jpg|gif|png|jpeg))\.\2)"
          id="card-src"
          className="popup__input popup__card-link"
          name="avatar"
          ref={ref}
          placeholder="Ссылка на фото (формата .jpg, .gif или .png)"
          required
        />
        <span className="popup__input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
