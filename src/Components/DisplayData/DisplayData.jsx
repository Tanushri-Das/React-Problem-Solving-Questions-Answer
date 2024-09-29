// 5. Context
import React, { useContext } from "react";
import { MyContext } from "../../context/MyProvider/MyProvider";

const DisplayData = () => {
  const data = useContext(MyContext);
  return (
    <div>
      <h3>{data}</h3>
    </div>
  );
};

export default DisplayData;
