// How to add data into useState array in functional component in react ? by default name

import React, { useEffect, useState } from "react";

const AddStaticData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (newUser) => {
    const newUserObj = {
      id: users.length + 1,
      name: newUser,
    };
    setUsers(prevUser=>[...prevUser,newUserObj])
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => handleAddUser("Tanushri")}>Add User</button>
    </div>
  );
};

export default AddStaticData;
