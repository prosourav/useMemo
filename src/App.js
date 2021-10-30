import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  const handleIncreament = () => {
    setCounter(counter + 1);
  };
  const handleDecreament = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <div>
        <h1>
          Factorial of {counter} is {result}
        </h1>
        <button onClick={handleIncreament}>Increament</button>
        <button onClick={handleDecreament}>Decremeant</button>
      </div>
      <div>
        <label>Enter Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3>My Name is {name}</h3>
      </div>
    </div>
  );
}
const factorial = (value) => {
  for (let i = 0; i < 100000; i++) {
    console.log(i);
  }
  return value * value;
};

export default App;
