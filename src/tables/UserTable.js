import React from "react";

const UserTable = e => (
  <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {e.users.length > 0 ? (
        e.users.map(user => (
          <tr key={user.id}>
            <td>{user.task}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No task added</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
