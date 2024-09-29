// 4. Sum of two numbers
import React, { useState } from "react";
import styles from "./Sum.module.css";

const SumOfTwoNumbers = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [sum, setSum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = parseInt(firstNumber) + parseInt(secondNumber);
    setSum(total);
    setFirstNumber("");
    setSecondNumber("");
  };
  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <label htmlFor="">First Number</label>
          <input
            type="number"
            name=""
            id=""
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="">Second Number</label>
          <input
            type="number"
            name=""
            id=""
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
          />
        </div>
        <div className={styles.btn}>
          <button className={styles.increment}>Sum</button>
        </div>
      </form>
      {sum !== null && <h4>Sum : {sum}</h4>}
    </div>
  );
};

export default SumOfTwoNumbers;
