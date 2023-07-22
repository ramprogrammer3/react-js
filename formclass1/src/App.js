import React, { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: ""
  })

  const changeHandler = (events) => {

    const { name, value, type, checked } = events.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  const submitHandler = (events) => {
    events.preventDefault();
    console.log(formData)
  }


  return (
    <div className='app'>
      <form action="" onSubmit={submitHandler}>
        <input type="text" name='firstName'

          placeholder='first name'

          onChange={changeHandler}

          value={formData.firstName}
        />

        <br /><br />
        <input type="text" name='lastName'

          value={formData.lastName}

          placeholder='last name'

          onChange={changeHandler} />

        <br /><br />
        <input type="email" name="email"

          value={formData.email}

          onChange={changeHandler}

          placeholder='email' />
        <br /><br />
        <textarea name="comments" placeholder='Enter your comments here'

          value={formData.comments}

          onChange={changeHandler}

          rows={10}
          cols={30}
        ></textarea>
        <br /><br />

        <input type="checkbox" name="isVisible" id="isVisible "

          checked={formData.isVisible}

          onChange={changeHandler} />

        <label htmlFor="isVisible ">Am I visible ?</label>

        <br /><br />
        <input type="radio" name="mode" id="r1"

          value="Online-mode"

          checked={formData.mode === "Online-mode"}

          onChange={changeHandler} />

        <label htmlFor="r1">online mode</label>
        <br /><br />
        <input type="radio" name="mode" id="r2"

          value="Offline-mode"

          checked={formData.mode === "Offline-mode"}

          onChange={changeHandler} />

        <label htmlFor="r2">Offline mode</label>
        <br /><br />
        <label htmlFor="favCar">Choose your favourite car : </label>

        <select name="favCar" id="favCar"
          onChange={changeHandler}
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>

          <option value="fartuner">fartuner</option>

          <option value="tharrr">tharrr</option>

          <option value="legender">legender</option>

          <option value="defender">defender</option>

        </select>

        <br /><br />

        <button> Submit </button>

      </form>

    </div>
  )
}

export default App