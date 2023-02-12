function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_img ${card && "popup_opened"}`}>
      <div className="popup__container popup__container-img">
        <img
          src={card && card.link}
          alt={card && card.name}
          className="popup__img"
        />
        <p className="popup__img-caption">{card && card.name}</p>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
