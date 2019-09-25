import React from "react";
import "./App.css";
import { Hello } from "./components/hello";
import { Text } from "./components/text";
import Counter from "./components/counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello compiler="Typescript" framework="react" />
      <Text></Text>
      <Counter />
    </div>
  );
};

export default App;
