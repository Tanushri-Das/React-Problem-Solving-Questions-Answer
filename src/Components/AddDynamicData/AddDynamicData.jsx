// How to add data into useState array in functional component in react ? dynamic name

import React, { useEffect, useState } from "react";
import './AddDynamicData.css'

const AddDynamicData = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = () => {
    if (newUserName.trim()) {
      const newUserObj = {
        id: users.length + 1,
        name: newUserName,
      };
      setUsers((prevUser) => [...prevUser, newUserObj]);
      setNewUserName("");
      setShowForm(false);
    }
  };
  return (
    <div className="container">
      <h2 className="user-title">Users</h2>
      <ul>
        {users.map((user) => (
          <li className="user-name" key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div className="sum-btn-div">
        <button className="plus" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add User"}
        </button>
      </div>
      {showForm && ( // Conditionally render the form
        <div className="form">
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Enter user name"
            className="user-input"
          />
          <button className="plus submit" onClick={handleAddUser}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddDynamicData;
