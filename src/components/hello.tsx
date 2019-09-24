import React, { useState } from "react";
import styles from "./hello.module.css";

export interface IHelloProps {
  compiler: string;
  framework: string;
}

export const Hello: React.FC<IHelloProps> = props => {
  const [count, setState] = useState<number>(5);

  const OnHandleIncrement = () => {
    setState(count * 10);
  };
  return (
    <div>
      <h1 className={styles.main__head}>
        Hello from {props.compiler} and {props.framework} !
      </h1>
      {count}
      <div>
        <button onClick={OnHandleIncrement}>Щелкни меня</button>
      </div>
    </div>
  );
};
