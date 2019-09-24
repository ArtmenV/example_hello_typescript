import React, { useState, useRef } from "react";
import styles from "./hello.module.css";

export interface IHelloProps {
  compiler: string;
  framework: string;
}

export interface IState {
  text: string;
  id: number;
}

export const Hello: React.FC<IHelloProps> = props => {
  const [count, setState] = useState<IState>({ text: "Hello world", id: 10 });
  const unputRef = useRef<HTMLInputElement>(null);

  const OnHandleIncrement = () => {
    setState(count);
  };
  return (
    <div>
      <h1 className={styles.main__head}>
        Hello from {props.compiler} and {props.framework} !
      </h1>
      <input ref={unputRef} />
      {count.text}&nbsp;
      {count.id}
      <div>
        <button onClick={OnHandleIncrement}>Щелкни меня</button>
      </div>
    </div>
  );
};
