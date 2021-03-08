import React from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Mian";

const App = () => {
  return (
    <div className="app">
      <main className="app-content">
        <Main />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
