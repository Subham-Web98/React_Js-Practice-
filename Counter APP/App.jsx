import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(Number);

  const addNumber = () => {
    setCounter(counter + 1);
    if (counter == 20) {
      alert("You are End");
      setCounter(0);
    }
  };

  const removeNumber = () => {
    setCounter(counter - 1);
    if(counter == 0) {
      alert("Stop")
      setCounter(0);
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h3>Count : {counter}</h3>
      <button onClick={addNumber}>Add</button>
      <button onClick={removeNumber}>Remove</button>
    </>
  );
}

export default App;
