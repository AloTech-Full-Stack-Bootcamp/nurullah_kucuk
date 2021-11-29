import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = [];

export default function App() {
  // Başlangıç değerimiz boş bir dizi.
  const [list, setList] = useState(INITIAL_STATE); 
  const [newHeader, setNewHeader] = useState();  
  const addNew = (title) => {
    // Her yeni eklemede diziye atılacak obje ve key-value değerleri.
    setList([...list, { id: Date.now(), header: title, complete: false }]); 
    setNewHeader("");
  };
  const markCompleted = (id) => { 
    // Tamamlandığında üzerine çizgi çekiyoruz.
    setList(list.map((el) => (el.id === id ? { ...el, complete: !el.complete } : el)));
  };
  const clearCompleted = () => { 
    // tamamlanan görevleri silmek için.
    setList(list.filter((item) => !item.complete));
  };

  return (
    <>
      <div className="app">
        <h1 className="main-title" >NOT SEPETİM</h1>
        <div className="add-form">
          <input
            placeholder="Unutma.."
            value={newHeader}
            onChange={(e) => setNewHeader(e.target.value)}
          />
          <button onClick={() => addNew(newHeader)}> Ekle </button>
        </div>
        <div className="list">
          {list.map((item, index) => (
            <div
              key={index}
              onClick={() => markCompleted(item.id)}
              className={item.complete ? "completed" : ""}h>
              {item.header}
            </div>
          ))}
        </div>
        <button onClick={() => clearCompleted()} className="clear">
          Tamamlananları Temizle
        </button>
      </div>
    </>
  );
}
