// 6. Show current time
import React, { useEffect, useState } from "react";

const ShowCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>
        The current time is :
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </h2>
    </div>
  );
};

export default ShowCurrentTime;
