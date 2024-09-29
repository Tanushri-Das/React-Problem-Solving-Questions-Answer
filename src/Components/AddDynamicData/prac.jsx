import React, { useEffect, useState } from "react";
import "../AddData/AddData.css";

const AddUserNameDynamic = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = () => {
    if (newUserName.trim()) {
      // Check if input is not empty
      const newUserObj = {
        id: users.length + 1,
        name: newUserName,
      };
      console.log(newUserObj);
      setUsers((prevUser) => [...prevUser, newUserObj]);
      setNewUserName(""); // Clear the input field after adding
      setShowForm(false); // Hide the form after adding the user
    }
  };

  return (
    <div style={{ border: "1px solid red" }}>
      <h2 className="user">Users</h2>
      <ul>
        {users.map((user) => (
          <li className="user-name" key={user.id}>
            {user.name}
          </li>
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
          <button className="plus submit" onClick={addUser}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUserNameDynamic;
