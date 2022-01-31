/** global: document */
import React from "react";
import { render } from "react-dom";
import App from "./pages/_app.jsx";

const root = document.querySelector("#root");

render(<App />, root);
