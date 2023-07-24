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

    const [accountType, setAccountType] = useState("Instructor");

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
            ...formData, accountType
        }
        console.log(accountData)

        navigate("/dashboard")

    }

    function clickHandler(events) {
        setAccountType(events.target.textContent)
    }


    return (
        <div>
            {/* student instructor tab  */}

            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button
                    onClick={clickHandler} className={`${accountType === "Student" ?
                        ("bg-richblack-900 text-richblack-5") :
                        ("bg-transparent text-richblack-200")} py-2 px-5 
                    rounded-full transition-all duration-200`}
                >
                    Student</button>
                <button onClick={clickHandler}
                    className={`${accountType === "Instructor" ?
                        ("bg-richblack-900 text-richblack-5") :
                        ("bg-transparent text-richblack-200")} py-2 px-5 
                    rounded-full transition-all duration-200`}

                >Instructor</button>
            </div>

            <form action="" onSubmit={submitHandler}>
                {/* first name ans last name  */}
                <div className='flex gap-x-4 justify-between mt-4 mb-4'>
                    <label htmlFor="" className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                        >First Name <sup className='text-pink-200'>*</sup></p>
                        <input type="text"

                            onChange={changeHandler}
                            value={formData.firstname}
                            name="firstname"
                            required

                            placeholder='Enter first name '
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] 
                            border-b'
                        />
                    </label>
                    <label htmlFor="" className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                        >Last Name <sup className='text-pink-200'>*</sup></p>
                        <input type="text"
                            onChange={changeHandler}
                            value={formData.lastname}
                            name="lastname"
                            required
                            placeholder='Enter last name '
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] 
                            border-b'
                        />
                    </label>
                </div>

                <label htmlFor="" className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >Email Address <sup className='text-pink-200'>*</sup></p>
                    <input type="email"
                        onChange={changeHandler}
                        value={formData.email}
                        name="email"
                        required
                        placeholder='Enter email address '
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] 
                        border-b'
                    />
                </label>


                <div className='flex justify-between gap-x-4 mt-4'>
                    <label htmlFor="" className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                        >Create password <sup className='text-pink-200'>*</sup></p>

                        <input

                            type={showPassword ? "text" : "password"}
                            onChange={changeHandler}
                            value={formData.password}
                            name="password"

                            required
                            placeholder='create password '
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] 
                            border-b'
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-[38px] cursor-pointer'>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label htmlFor="" className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                        >Confirm password <sup className='text-pink-200'>*</sup></p>
                        <input type={showConfirmPassword ? "text" : "password"}
                            onChange={changeHandler}
                            value={formData.confirmpassword}
                            name="confirmpassword"
                            required
                            placeholder='confirm password '
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] 
                            border-b'
                        />
                        <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute right-3 top-[38px] cursor-pointer'>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>

                <button className='bg-yellow-50 rounded-[8px] font-medium
                 text-richblack-900 px-[12px] py-[8px] w-full mt-6'>Create Account</button>

            </form>

        </div>
    )
}

export default SignupForm