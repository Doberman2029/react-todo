import React from "react";

export default function TodoSort({ sort, changeHandler }) {
  return (
    <form className="mt-3">
      {sort.map((el) => (
        <label className="sortng__radio mr-3" key={el.name}>
          <input
            className="sortng__radio mr-2"
            type="radio"
            name="todoSorting"
            checked={el.current}
            value={el.name}
            onChange={() => changeHandler(el.name)}
          />
          <span>{el.name}</span>
        </label>
      ))}
    </form>
  );
}
