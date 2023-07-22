import React from 'react'

const App = () => {

  const firstNameHandler = (event) => {

    console.log(event.target.value)

    console.log(event.target)

  }

  const lastNameHandler = (event) => {

    console.log(event.target.value)
  }

  return (
    <div className='app'>
      <form action="">

        <input type="text" name=""
          id=""
          placeholder='first name'
          onChange={firstNameHandler}
        />

        <br /><br />

        <input type="text" placeholder='last name' onChange={lastNameHandler} />


      </form>

    </div>
  )
}

export default App