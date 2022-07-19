import React from "react";
import './App.css';
import Herosection from "./components/HeroSection";
import Secondsection from "./components/Secondsection";

function App() {
  return (
    <div>
    <Herosection />
    <div style={{marginTop: "120px"}}>
    <Secondsection />
    </div>
    </div>
  );
}

export default App;
