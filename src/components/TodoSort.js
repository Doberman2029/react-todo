import React from "react";

export default function TodoSort({ sort, changeHandler }) {
  return (
    <form>
      {sort.map((el) => (
        <label className="sortng__radio" key={el.name}>
          <input
            className="sortng__radio"
            type="radio"
            name="todoSorting"
            checked={el.current}
            value={el.name}
            onChange={() => changeHandler(el.name)}
          />
          {el.name}
        </label>
      ))}
    </form>
  );
}
