import {useState} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
  isOpen,
  onClose,
  onUpdatePlace,
  onCloseByEscEndOverlay,
  isLoading,
}) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdatePlace({
      name,
      src: link,
    });
    setName("");
    setLink("");
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card-add"
      buttonText="Создать"
      buttonLoadingText="Добавляем место..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCloseByEscEndOverlay={onCloseByEscEndOverlay}
      isLoading={isLoading}
    >
      <div className="popup__input-wrap">
        <input
          type="text"
          id="card-name"
          className="popup__input popup__card-name"
          name="name"
          value={name}
          onChange={handleChangeName}
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
          value={link}
          onChange={handleChangeLink}
          placeholder="Ссылка на фото (формата .jpg, .gif или .png)"
          required
        />
        <span className="popup__input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
