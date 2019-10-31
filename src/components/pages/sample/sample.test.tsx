import React from "react";
import ReactDOM from "react-dom";
import Sample from "./sample";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Sample />, div);
  ReactDOM.unmountComponentAtNode(div);
});
