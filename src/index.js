import React from "react";
import ReactDOM from "react-dom";
import LifeCycleHooks from "./lifecyclehooks";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <LifeCycleHooks helloparent={"I am parentProps"} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
