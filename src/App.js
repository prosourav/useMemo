import React, { useMemo, useState } from "react";
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
      <AnotherUseCase name={name} />
    </div>
  );
}

// without memo function it call when ever any state get changed in parent component
const AnotherUseCase = React.memo(() => {
  console.log("renderd");
  return <p>My name is </p>;
});
const factorial = (value) => {
  let i = 1;
  while (i < 1000000000) {
    i++;
  }
  return value * value;
};

export default App;
