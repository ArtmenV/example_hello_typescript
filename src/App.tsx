import React from "react";
import "./App.css";
import { Hello } from "./components/hello";

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello compiler="Typescript" framework="react" />
    </div>
  );
};

export default App;
