// import { useState } from "react";
// import Counter from "./components/Counter/Counter";

import Posts from "./components/Posts/Posts";

function App() {
  // const [showCounter, setShowCounter] = useState(true);

  // function toggleHandler() {
  //   setShowCounter(!showCounter);
  // }
  return (
    <div className="container mx-auto">
      {/* <div>
        <button
          className="bg-pink-500 text-white px-3 py-1 my-2"
          onClick={toggleHandler}
        >
          Toggle Component
        </button>
      </div>
      <div>{showCounter && <Counter />}</div> */}

      <Posts />
    </div>
  );
}

export default App;
