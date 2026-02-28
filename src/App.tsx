import { useState } from "react";
import { messages, type MessageItem } from "./data";
import "./App.css";

function App() {
  const [selected, setSelected] = useState<MessageItem | null>(null);

  const handleSelect = (item: MessageItem) => {
    setSelected(item);
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleBack = () => {
    setSelected(null);
  };

  if (selected) {
    const charCount = selected.keyword.length;
    const keywordSize = Math.min(70 / charCount, 40);

    return (
      <div
        className="display-screen"
        onClick={handleBack}
        style={{
          "--accent-color": selected.color,
          "--keyword-size": `${keywordSize}vh`,
        } as React.CSSProperties}
      >
        <div className="display-content">
          <h1 className="display-keyword">{selected.keyword}</h1>
          {selected.suffix && <p className="display-fulltext">{selected.suffix}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="home-screen">
      <header className="home-header">
        <h1 className="home-title">Silent Call</h1>
        <p className="home-subtitle">- 声を出さずに伝える -</p>
      </header>
      <div className="home-list">
        {messages.map((item) => (
          <button
            key={item.id}
            className="home-card"
            style={{ "--card-color": item.color } as React.CSSProperties}
            onClick={() => handleSelect(item)}
          >
            <span className="card-keyword">{item.keyword}</span>
            {item.suffix && <span className="card-fulltext">{item.suffix}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
