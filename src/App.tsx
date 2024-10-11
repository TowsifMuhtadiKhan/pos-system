import React from "react";

import LeftBar from "./components/LeftBar";

import "./App.css"; // Use this for additional styling
import Header from "./components/Header";
import RightBar from "./components/RightBar";
import MainComponent from "./components/MainComponent";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flexGrow: 1 }}>
        <LeftBar />
        <div style={{ flexGrow: 1, background: "white" }}>
          <MainComponent />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default App;
