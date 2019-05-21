import React, { useState } from 'react'

const AddUserForm = props => {
  const initialFormState = { id: null, task: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { task, value } = event.target

    setUser({ ...user, [task]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.task || !user.task) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Task</label>
      <input type="text" name="task" value={user.task} onChange={handleInputChange} />
    
      
      <button>Add new Task</button>
    </form>
  )
}

export default AddUserForm