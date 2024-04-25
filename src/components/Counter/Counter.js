import { useEffect, useRef, useState } from "react";

export default function Counter() {
  const isMounted = useRef(false);
  const [counter, setCounter] = useState(0);
  const [x, setX] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  //when componentDidMount and Update
  useEffect(() => {
    console.log("Fires on ComponentDidMount and Update");
  });

  //when componentDidMount only
  useEffect(() => {
    console.log("Fires on ComponentDidMount");
  }, [counter]);

  //when component unmounted and also update

  useEffect(() => {
    return () => {
      console.log("Fires on componentWillUnmount and update");
    };
  });

  // when component unmounted only

  useEffect(() => {
    return () => {
      console.log("Fires on componentWillUnmount");
    };
  }, []);

  // when component Update only

  useEffect(() => {
    if (isMounted.current) {
      console.log("Fires ComponentDidUpdate");
    } else {
      isMounted.current = true;
    }
  });

  return (
    <div>
      <div className="">Counter Component</div>
      <div className="">Counter: {counter}</div>
      <div className="">X: {x}</div>
      <div>
        <button
          className="bg-green-500 my-2 px-2 py-1 text-white"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 my-2 mx-2 px-2 py-1 text-white"
          onClick={decrement}
        >
          Decrement
        </button>

        <button
          className="bg-green-500 my-2 px-2 py-1 text-white"
          onClick={() => setX(x + 1)}
        >
          Increment X
        </button>
      </div>
    </div>
  );
}
