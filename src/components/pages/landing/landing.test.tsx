import React from "react";
import ReactDOM from "react-dom";
import Landing from "./landing";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Landing />, div);
  ReactDOM.unmountComponentAtNode(div);
});
