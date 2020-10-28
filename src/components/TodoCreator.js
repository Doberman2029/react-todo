import React from "react";

export default function TodoCreator({
  titelHandler,
  descriptionHandler,
  titleInput,
  descriptionInput,
  newTodo,
}) {
  let validation =
    titleInput.trim().length > 0 && descriptionInput.trim().length > 0
      ? false
      : true;

  return (
    <form className="create__form">
      <input
        className="create__input"
        onChange={(e) => titelHandler(e)}
        value={titleInput}
        placeholder="Title"
      />
      <input
        className="create__input"
        onChange={(e) => descriptionHandler(e)}
        value={descriptionInput}
        placeholder="Description"
      />
      <button
        className={validation ? "create__btn disabled" : "create__btn"}
        onClick={newTodo}
        disabled={validation}
      >
        Click me for create new todo!
      </button>
    </form>
  );
}
