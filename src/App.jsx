import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page">
      <section className="counter-card" aria-labelledby="page-title">
        <p className="eyebrow">A little at a time</p>
        <h1 id="page-title">Counter</h1>
        <p className="description">Use the buttons to change the count.</p>

        <div className="count-display" aria-live="polite" aria-atomic="true">
          {count}
        </div>

        <p className={`status${count === 0 ? " status-limit" : ""}`} aria-live="polite">
          {count === 0 ? "Minimum limit reached" : "You're above the minimum"}
        </p>

        <div className="controls" aria-label="Counter controls">
          <button
            className="button button-secondary"
            onClick={() => setCount((currentCount) => Math.max(0, currentCount - 1))}
            disabled={count === 0}
          >
            Decrement
          </button>
          <button
            className="button button-primary"
            onClick={() => setCount((currentCount) => currentCount + 1)}
          >
            Increment
          </button>
        </div>

        <button
          className="reset-button"
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          Reset
        </button>
      </section>
    </main>
  );
}

export default App;
