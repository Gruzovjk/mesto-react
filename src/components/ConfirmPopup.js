import PopupWithForm from "./PopupWithForm";

function ConfirmPopup({
  onClose,
  onCloseByEscEndOverlay,
  isLoading,
  onCardRemove,
  card,
  buttonText,
  buttonLoadingText,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardRemove(card);
    onClose();
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="type_confirm"
      isOpen={card}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCloseByEscEndOverlay={onCloseByEscEndOverlay}
    >
      <button type="submit" className="popup__save-button">
        {isLoading ? buttonLoadingText : buttonText}
      </button>
    </PopupWithForm>
  );
}

export default ConfirmPopup;
