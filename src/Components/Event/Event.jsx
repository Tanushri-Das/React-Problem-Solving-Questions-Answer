import React, { useState } from "react";

const Event = () => {
  const [bgColor, setBgColor] = useState("white");
  return (
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
      <button onClick={() => setBgColor("red")}>Click me</button>
    </div>
  );
};

export default Event;
