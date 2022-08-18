import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./Component/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const element = <h1>How are React, what is going on there ?</h1>;

console.log(element);

root.render(<App initialCount={5} />);
