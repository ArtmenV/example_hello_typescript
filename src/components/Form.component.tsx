import React, { useState } from "react";

type FormElem = React.FormEvent<HTMLFormElement>;

interface Props {}
export const FormComponent: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState([]);

  const HandleSubmit = (e: FormElem): void => {
    e.preventDefault();
    setValue("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="input text"
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};
