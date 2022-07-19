import React from "react";
import './App.css';
import Herosection from "./components/HeroSection";
import Secondsection from "./components/Secondsection";
import Component4 from "./components/Component4";

function App() {
  return (
    <div>
    <Herosection />
    <div style={{marginTop: "120px"}}>
    <Secondsection />
    </div>
    <Component4 />
    </div>
  );
}

export default App;
