import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

        if (formData.password !== formData.confirmpassword) {
            toast.error("Password do not match")
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account created successfully")
        const accountData = {
            ...formData,
        }
        console.log(accountData)

        navigate("/dashboard")

    }


    return (
        <div>
            {/* student instructor tab  */}

            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form action="" onSubmit={submitHandler}>
                {/* first name ans last name  */}
                <div>
                    <label htmlFor="">
                        <p>First Name <sup>*</sup></p>
                        <input type="text"
                            onChange={changeHandler}
                            value={formData.firstname}
                            name="firstname"
                            required
                            placeholder='Enter first name '
                        />
                    </label>
                    <label htmlFor="">
                        <p>Last Name <sup>*</sup></p>
                        <input type="text"
                            onChange={changeHandler}
                            value={formData.lastname}
                            name="lastname"
                            required
                            placeholder='Enter last name '
                        />
                    </label>
                </div>

                <label htmlFor="">
                    <p>Email Address <sup>*</sup></p>
                    <input type="email"
                        onChange={changeHandler}
                        value={formData.email}
                        name="email"
                        required
                        placeholder='Enter email address '
                    />
                </label>


                <div>
                    <label htmlFor="">
                        <p>Create password <sup>*</sup></p>
                        <input type={showPassword ? "text" : "password"}
                            onChange={changeHandler}
                            value={formData.password}
                            name="password"
                            required
                            placeholder='create password '
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>

                    <label htmlFor="">
                        <p>Confirm password <sup>*</sup></p>
                        <input type={showConfirmPassword ? "text" : "password"}
                            onChange={changeHandler}
                            value={formData.confirmpassword}
                            name="confirmpassword"
                            required
                            placeholder='confirm password '
                        />
                        <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>

                <button>Create Account</button>

            </form>

        </div>
    )
}

export default SignupForm