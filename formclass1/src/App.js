import React, { useState } from 'react'

const App = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")

  const firstNameHandler = (event) => {
    setFirstName(event.target.value)
  }

  const lastNameHandler = (event) => {
    setLastName(event.target.value)
  }
  console.log(firstName)
  console.log(lastName)

  return (
    <div className='app'>
      <form action="">
        <input type="text" placeholder='first name' onChange={firstNameHandler} value={firstName} />
        <br /><br />
        <input type="text" value={lastName} placeholder='last name' onChange={lastNameHandler} />


      </form>

    </div>
  )
}

export default App