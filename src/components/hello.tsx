import React from "react";
import styles from "./hello.module.css";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => {
  return (
    <h1 className={styles.main__head}>
      Hello from {props.compiler} and {props.framework} !
    </h1>
  );
};


class Animal {
  move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
      console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();