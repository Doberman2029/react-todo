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
    <form className="w-25">
      <div className="form-group">
        <input
          className="form-control mb-1"
          onChange={(e) => titelHandler(e)}
          value={titleInput}
          placeholder="Title"
        />
        <input
          className="form-control"
          onChange={(e) => descriptionHandler(e)}
          value={descriptionInput}
          placeholder="Description"
        />
      </div>
      <button
        className={
          validation
            ? "btn btn-outline-secondary disabled w-100"
            : "btn btn-outline-secondary w-100"
        }
        onClick={newTodo}
        disabled={validation}
      >
        Click me for create new todo!
      </button>
    </form>
  );
}
