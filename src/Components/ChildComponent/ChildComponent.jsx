import React from "react";

const ChildComponent = ({ showMessage }) => {
  const handleClick = () => {
    const data = "Hello from Child Component";
    showMessage(data);
  };
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Show message in parent</button>
    </div>
  );
};

export default ChildComponent;
