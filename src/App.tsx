import React from "react";
import "./App.css";
import { Hello } from "./components/hello";
import { tsTypeReference, tsFunctionType } from "@babel/types";
import { Text } from "./components/text";

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello compiler="Typescript" framework="react" />
      <Text></Text>
    </div>
  );
};

export default App;
