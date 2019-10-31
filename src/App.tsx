import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Menu from "./components/shared/menu";
import Landing from "./components/pages/landing/landing";
import Sample from "./components/pages/sample/sample";

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu></Menu>
      <Landing></Landing>
      <Sample></Sample>
    </div>
  );
};

export default App;
