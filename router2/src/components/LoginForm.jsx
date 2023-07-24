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
        console.log(formData)
        toast.success("Logged In successfully")
        navigate("/dashboard")
    }

    return (
        <form action="" onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-6'
        >

            <label htmlFor="">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input type="email"

                    onChange={changeHandler}
                    value={formData.email}
                    required

                    placeholder='Enter email address'
                    name='email'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] 
                    border-b'
                />
            </label>

            <label htmlFor="" className='relative'>
                
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password <sup className='text-pink-200'>*</sup>
                </p>

                <input 

                    type={showPassword ? "text" : "password"}
                    onChange={changeHandler}
                    value={formData.password}
                    required

                    placeholder='Enter password'
                    name='password'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                     w-full p-[12px] border-b'
                />
                <span onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-[38px] cursor-pointer'
                >
                    {showPassword ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>
                <Link to="#"> <p className='text-sm 
                mt-1 text-blue-100 w-full ml-auto
                 max-w-max'>Forgot password</p></Link>
            </label>

            <button
                className='bg-yellow-50 rounded-[8px] font-medium
                 text-richblack-900 px-[12px] py-[8px]'
            >
                Sign In
            </button>

        </form>
    )
}

export default LoginForm