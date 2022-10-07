import React, { useState, useEffect, useMemo, useCallback } from "react";

const fib = (n) => {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
};

function App() {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  const fib = useCallback((n) => {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);

  useEffect(() => {
    console.log("New render");
  }, [fibNumber]);

  return (
    <main className="App">
      <label htmlFor="">Fibonacci Sequence</label>
      <input
        type="text"
        placeholder="Position"
        value={userNumber}
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number: {fibNumber || "--"}</p>
      <br />
      <br />
      <label>Random Input:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
