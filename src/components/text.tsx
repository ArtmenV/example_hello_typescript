import React, { useReducer } from "react";
import { TodoReducer } from "../reducer/TodoReducer";

export const Text: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <div>
      {JSON.stringify(todos)}
      <button
        onClick={() => {
          dispatch({ type: "add", text: "..." });
        }}
      >
        <button
          onClick={() => {
            dispatch({ type: "remove", idx: 1 });
          }}
        >
          Удалить
        </button>
        Добавить тодо
      </button>
    </div>
  );
};
