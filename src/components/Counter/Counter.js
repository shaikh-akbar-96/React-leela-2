import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  function Increment() {
    setCounter(counter + 1);
  }
  function Decrement() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <div className="">Counter Component</div>
      <div className="">Counter: {counter}</div>
      <div>
        <button
          className="bg-green-500 my-2 px-2 py-1 text-white"
          onClick={Increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 my-2 mx-2 px-2 py-1 text-white"
          onClick={Decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
