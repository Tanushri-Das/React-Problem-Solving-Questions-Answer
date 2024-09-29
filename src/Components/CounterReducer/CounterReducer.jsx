import React, { useReducer } from "react";
import styles from "./CounterReducer.module.css";

const CounterReducer = () => {
  const counter = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(counter, { count: 0 });
  return (
    <div className={styles.container}>
      <h1>Count : {state.count}</h1>
      <button
        className={styles.increment}
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className={styles.decrement}
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterReducer;
