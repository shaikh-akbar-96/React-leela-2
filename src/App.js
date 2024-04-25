import { useState } from "react";
import Counter from "./components/Counter/Counter";

function App() {
  const [showCounter, setShowCounter] = useState(true);

  function toggleHandler() {
    setShowCounter(!showCounter);
  }
  return (
    <div className="container mx-auto">
      <div>
        <button
          className="bg-pink-500 text-white px-3 py-1 my-2"
          onClick={toggleHandler}
        >
          Toggle Component
        </button>
      </div>
      <div>{showCounter && <Counter />}</div>
    </div>
  );
}

export default App;
