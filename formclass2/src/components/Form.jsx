import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",

    })


    const changeHandler = (events) => {
        const { name, value, checked, type } = events.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checked" ? checked : value
            }
        })
    }


    return (
        <div>
            <form action="">

                <input type="text"
                    name="firstName"
                    placeholder='Ram' id='firstName'
                    value={formData.firstName}
                    onChange={changeHandler}
                />

            </form>
        </div>
    )
}

export default Form