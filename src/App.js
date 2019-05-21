import React from 'react'
import UserTable from './tables/UserTable'

//import './App.css';
const App = () => {
  return (
    <div className="container">
      <h1>Task List</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add task</h2>
        </div>
        <div className="flex-large">
          <h2>Task List</h2>
          <UserTable />
        </div>
      </div>
    </div>
  )
}


export default App;
