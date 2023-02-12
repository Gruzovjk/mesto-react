import React from "react";

function Card({card, onCardClick}) {
  function handleCardClick() {
    onCardClick(card);
  }
  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__img"
        onClick={handleCardClick}
      />
      <div className="card__caption">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__like">
          <button
            className="card__like-button"
            type="button"
            title="Мне нравится"
          ></button>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
      <button
        className="card__remove-button"
        type="button"
        title="Удалить место"
      ></button>
    </li>
  );
}

export default Card;
