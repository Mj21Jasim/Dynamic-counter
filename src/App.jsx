import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Generate a unique-looking color from the counter value
  const getBackground = (number) => {
    const hue = ((number * 137.508) % 360 + 360) % 360;

    const saturation =
      60 + (Math.abs(number * 17) % 31);

    const lightness =
      35 + (Math.abs(number * 13) % 31);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };


  const background = getBackground(count);

  return (
    <div
      className="app"
      style={{ backgroundColor: background }}
    >
      <div className="counter-card">

        <p className="subtitle">
          Count beyond limits
        </p>

        <h1>Dynamic Counter</h1>

        <p className="description">
          Every number creates a new background.
        </p>

        <div
          key={count}
          className="count"
        >
          {count}
        </div>

        <div className="buttons">

          <button
            className="counter-btn"
            onClick={() => setCount(count - 1)}
          >
            −
          </button>

          <button
            className="reset-btn"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button
            className="counter-btn"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>

        </div>

        <p className="color-info">
          Background changes with every count
        </p>

      </div>
    </div>
  );
}

export default App;