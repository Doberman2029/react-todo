import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoSort from "./TodoSort";

function TodoItems({ todo }) {
  const [sort, setSort] = useState([
    {
      name: "All",
      current: true,
    },
    {
      name: "Completed",
      current: false,
    },
    {
      name: "Uncompleted",
      current: false,
    },
  ]);

  const [current, setCurrent] = useState("All");

  const handleCurrentChange = (name) => {
    setSort((prev) =>
      prev.map((el) => ({ ...el, current: el.name === name ? true : false }))
    );
    setCurrent(name);
  };

  const handleSort = () => {
    let newArray = todo;
    if (current === "Completed") {
      newArray = todo.filter((todo) => todo.done === true);
    } else if (current === "Uncompleted") {
      newArray = todo.filter((todo) => todo.done === false);
    }
    if (!newArray.length > 0) {
      return <p className="items__empty">You don't have {current} todo</p>;
    }
    return newArray.map(({ id, title, description, done }) => {
      return (
        <TodoItem
          key={id}
          title={title}
          description={description}
          id={id}
          done={done}
        />
      );
    });
  };

  return (
    <>
      <TodoSort sort={sort} changeHandler={handleCurrentChange} />
      <ul className="items">{handleSort()}</ul>
    </>
  );
}

export default TodoItems;
