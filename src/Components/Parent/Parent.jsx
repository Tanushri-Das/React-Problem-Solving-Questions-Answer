// 7. How to display dynamic html data in react ? ParentComponent

import React, { useEffect, useState } from "react";
import DynamicHtmlData from "../DynamicHtmlData/DynamicHtmlData";

const Parent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <DynamicHtmlData user={user} />
      ))}
    </div>
  );
};

export default Parent;
