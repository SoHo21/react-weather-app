import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Tokyo" />
      <footer>
        This project was coded by Sofia and is {""}
      <a href="https://github.com/SoHo21/react-weather-app" rel="noreferrer" target="_blank">open-sourced on GitHub</a>
      and <a href="https://angry-mahavira-7ead81.netlify.app/" rel="noreferrer" target="_blank">hosted on Netlify</a>
      </footer>
      </div>
    </div>
    
  );
}
