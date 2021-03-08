import React from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { notes } from "./domain/note";

function App() {
  return (
    <div className="app">
      <main className="app-content">
        <pre>{JSON.stringify(notes, null, 2)}</pre>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
