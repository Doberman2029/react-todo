import React, { useContext } from "react";
import { ItemContext } from "./TodoList";

export default function TodoItem({ title, description, id, done }) {
  const { removeTodo, checkHandler } = useContext(ItemContext);
  return (
    <li className={done ? "item check mb-1" : "item mb-1"}>
      <input
        className="item__checkbox"
        type="checkbox"
        checked={done}
        onChange={() => checkHandler(id)}
      />

      <button
        type="button"
        className="close mr-3"
        aria-label="Close"
        onClick={() => removeTodo(id)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <p className="item__title">{title}</p>
      <p className="item__description">{description}</p>
    </li>
  );
}
