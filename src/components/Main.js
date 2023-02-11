export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            src="#"
            title="Ваш аватар"
            alt="Аватар"
            className="profile__avatar-img"
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            title="Редактировать фото профиля"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Ваше имя</h1>
          <button
            className="profile__edit-button"
            type="button"
            title="Редактировать профиль"
          ></button>
          <p className="profile__about">Расскажите о себе</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          title="Добавить новое место"
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          <template className="card__template">
            <li className="card">
              <img src="#" alt="Ваше место" className="card__img" />
              <div className="card__caption">
                <h2 className="card__name"></h2>
                <div className="card__like">
                  <button
                    className="card__like-button"
                    type="button"
                    title="Мне нравится"
                  ></button>
                  <span className="card__like-counter"></span>
                </div>
              </div>
              <button
                className="card__remove-button"
                type="button"
                title="Удалить место"
              ></button>
            </li>
          </template>
        </ul>
      </section>
    </main>
  );
}
