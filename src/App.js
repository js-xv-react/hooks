import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";
import Select from "./components/Select";
import SongList from "./components/SongList";

function App() {
  const [show, setShow] = useState(true);
  // const [number, setNumber] = useState(1);

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* {show ? <Counter1 /> : null} */}
      {/* ternary operator */}
      {/* <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button> */}

      {/* ternary operator nesting */}
      {/* <button onClick={() => setNumber(() => number + 1)}>
        {number === 1 ? "jedan" : number % 2 === 0 ? "dva" : "tri"}
      </button> */}

      {/* <Select /> */}

      <SongList />
    </div>
  );
}

export default App;
