import React, { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <h1>Count : {count}</h1>
      <button className={styles.increment} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className={styles.decrement} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
