import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWordApp } from "./HelloWordApp";
import { FirstApp } from "./FirstApp";
import './styles.css'
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp title="Titulo de la App" />
    {/* <CounterApp value={ 20 }/> */}
  </React.StrictMode>
)