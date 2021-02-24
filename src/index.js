import { StrictMode } from "react";
import ReactDOM from "react-dom";

import HolaMundo from "./orlando";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HolaMundo />
  </StrictMode>,
  rootElement
);
