function PopupWithForm({title, name, children, buttonText, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <div className="popup__form">
          <form className="popup__set" name={name} noValidate>
            <h2 className="popup__title">{title}</h2>
            {children}
            <button type="submit" className="popup__save-button">
              {buttonText}
            </button>
          </form>
        </div>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;