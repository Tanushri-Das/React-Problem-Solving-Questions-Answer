import React, { useState } from "react";

const ShowHideData = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <h2>{isVisible ? "This is Tanushri Das" : null}</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Show" : "Hide"}
      </button>
    </div>
  );
};

export default ShowHideData;
