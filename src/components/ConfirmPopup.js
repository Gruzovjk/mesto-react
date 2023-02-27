import PopupWithForm from "./PopupWithForm";

function ConfirmPopup({
  onClose,
  onCloseByEscEndOverlay,
  isLoading,
  onCardRemove,
  card,
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
      buttonText="Да"
      buttonLoadingText="Удаляем место..."
      isOpen={card}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCloseByEscEndOverlay={onCloseByEscEndOverlay}
      isLoading={isLoading}
    ></PopupWithForm>
  );
}

export default ConfirmPopup;
