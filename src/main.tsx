import React from "react";
import ReactDOM from "react-dom/client";
import { Circle, Square } from "shapebox";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <a href="https://github.com/bobgobills/shapebox">shapebox</a>
    </div>
    <div>
      <a href="https://github.com/billgobills/vite-shapebox">vite-shapebox</a>
    </div>
    <br />
    <Circle />
    <br />
    <Square />
  </React.StrictMode>,
);
