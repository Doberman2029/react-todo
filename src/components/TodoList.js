import React, { useState, useEffect } from "react";
import TodoItems from "./TodoItems";
import TodoCreator from "./TodoCreator";

export const ItemContext = React.createContext();

export default function TodoList() {
  let json = localStorage.getItem("todoList");
  let initialState = json ? JSON.parse(json) : [];

  const [todo, setTodo] = useState(initialState);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDecriptionInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todo));
  }, [todo]);

  const titleInputHandler = (e) => {
    setTitleInput(e.target.value);
  };
  const descriptionInputHandler = (e) => {
    setDecriptionInput(e.target.value);
  };
  const createTodoHandler = () => {
    setTodo((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: titleInput,
        description: descriptionInput,
        done: false,
      },
    ]);
    setTitleInput("");
    setDecriptionInput("");
  };
  const removeTodo = (elementId) => {
    setTodo(todo.filter((el) => el.id !== elementId));
  };
  const checkHandler = (elId) => {
    setTodo((prev) =>
      prev.map((el) => ({ ...el, done: el.id === elId ? !el.done : el.done }))
    );
  };

  return (
    <div className="list">
      <TodoCreator
        titelHandler={titleInputHandler}
        descriptionHandler={descriptionInputHandler}
        titleInput={titleInput}
        descriptionInput={descriptionInput}
        newTodo={createTodoHandler}
      />
      {todo.length > 0 ? (
        <ItemContext.Provider value={{ removeTodo, checkHandler }}>
          <TodoItems todo={todo} />
        </ItemContext.Provider>
      ) : (
        <h2 className="list__empty">Here will be your todo!</h2>
      )}
    </div>
  );
}
