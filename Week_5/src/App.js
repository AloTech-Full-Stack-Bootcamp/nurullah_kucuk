import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = [];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [newHeader, setNewHeader] = useState();
  const addNew = (title) => {
    setListe([...liste, { id: Date.now(), baslik: title, tamamlandi: false }]);
    setNewHeader("");
  };
  const markCompleted = (id) => {
    setListe(liste.map((el) => (el.id === id ? { ...el, tamamlandi: !el.tamamlandi } : el)));
  };
  const clearCompleted = () => {
    setListe(liste.filter((item) => !item.tamamlandi));
  };

  return (
    <>
      <div className="app">
        <h1 className="main-title" >NOT SEPETİM</h1>
        <div className="form-ekle">
          <input
            placeholder="Unutma.."
            value={newHeader}
            onChange={(e) => setNewHeader(e.target.value)}
          />
          <button onClick={() => addNew(newHeader)}> Ekle </button>
        </div>
        <div className="liste">
          {liste.map((item, index) => (
            <div
              key={index}
              onClick={() => markCompleted(item.id)}
              className={item.tamamlandi ? "tamamlandi" : ""}h>
              {item.baslik}
            </div>
          ))}
        </div>
        <button onClick={() => clearCompleted()} className="temizle">
          Tamamlananları Temizle
        </button>
      </div>
    </>
  );
}
