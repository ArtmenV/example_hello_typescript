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
        Добавить тодо
      </button>
    </div>
  );
};
