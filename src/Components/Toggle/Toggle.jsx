// 10. Write a custom React hook that manages a piece of state representing a toggle (true/false) value. The hook should provide functions for toggling the state.

import React from "react";
import useToggle from "../../hooks/useToggle";

const Toggle = () => {
  const [isToggled, toggle] = useToggle(false);
  return (
    <div>
      <h2>{isToggled ? "true" : "false"}</h2>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default Toggle;
