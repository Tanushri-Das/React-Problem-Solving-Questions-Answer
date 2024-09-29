// 8.  How to call parent component method from child component in react ? /How to pass data from child component to parent component ? Parent


import React, { useState } from "react";
import ChildComponent from "../ChildComponent/ChildComponent";

const ParentComponent = () => {
  const [message, setMessage] = useState("");
  const showMessage = (msg) => {
    setMessage(msg);
  };
  return (
    <div>
      <h2>Parent Component</h2>
      <h3>Message from child component :{message}</h3>
      <ChildComponent showMessage={showMessage} />
    </div>
  );
};

export default ParentComponent;
