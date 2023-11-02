import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [from, setFrom] = useState("ar");
  const [to, setTo] = useState("es");

  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState({});

  async function handleTranslate(event) {
    event.preventDefault();
    const API = `http://localhost8080.translate?word=hello&from=en&to=es`;
    const res = await axios.get(API);
  }

  return (
    <>
      <form onSubmit={handleTranslate}>
        <div className="container">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input
            placeholder="Translate"
            onChange={(event) => setWord(event.target.value)}
          />
        </div>

        <div className="container">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input
            placeholder="Translate"
            onChange={(event) => setWord(event.target.value)}
          />
        </div>
      </form>
    </>
  );
}

export default App;
