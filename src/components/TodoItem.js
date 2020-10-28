import React, { useContext } from "react";
import { ItemContext } from "./TodoList";

export default function TodoItem({ title, description, id, done }) {
  const { removeTodo, checkHandler } = useContext(ItemContext);
  return (
    <li className={done ? "item check" : "item"}>
      <input
        className="item__checkbox"
        type="checkbox"
        checked={done}
        onChange={() => checkHandler(id)}
      />
      <button className="item__btn" onClick={() => removeTodo(id)}>
        &#10006;
      </button>
      <p className="item__title">{title}</p>
      <p className="item__description">{description}</p>
    </li>
  );
}
