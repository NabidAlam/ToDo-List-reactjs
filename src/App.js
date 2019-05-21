import React, { useState } from "react"
import UserTable from "./tables/UserTable"
import AddUserForm from "./forms/AddUserForm"

const App = () => {
  const usersData = [
    { id: 1, task: "Cycling" },
    { id: 2, task: "Running" },
    { id: 3, task: "Walking" }
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  //import './App.css';

  return (
    <div className="container">
      <h1>Task List</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add task</h2>
          <AddUserForm addUser ={addUser}/>
        </div>
        <div className="flex-large">
          <h2>Task List</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
