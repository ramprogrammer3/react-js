import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    function changeHandler(events) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [events.target.name]: events.target.value
            }
        })
    }

    function submitHandler(events) {
        events.preventDefault();
        setIsLoggedIn(true)
        toast.success("Logged In successfully")
        navigate("/dashboard")
    }

    return (
        <form action="" onSubmit={submitHandler}>

            <label htmlFor="">
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input type="email"
                    onChange={changeHandler}
                    value={formData.email}
                    required
                    placeholder='Enter email address'
                    name='email'
                />
            </label>

            <label htmlFor="">
                <p>
                    Password <sup>*</sup>
                </p>
                <input type={showPassword ? "text" : "password"}
                    onChange={changeHandler}
                    value={formData.password}
                    required
                    placeholder='Enter password'
                    name='password'
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>
                <Link to="#"> <p>Forgot password</p></Link>
            </label>

            <button> Sign In </button>

        </form>
    )
}

export default LoginForm