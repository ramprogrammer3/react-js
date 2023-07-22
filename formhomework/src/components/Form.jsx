import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        streetAddress: "",
        city: "",
        state: "",
        pin: "",
        comment: false,
        candidate: false,
        offer: false,
        notification: ""
    })

    const changeHandler = (events) => {
        const { name, value, type, checked } = events.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checked" ? checked : value
            }
        })
    }

    const submitHandler = (events) => {
        events.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <form action="" className='flex flex-col gap-2' onSubmit={submitHandler}>

                <label htmlFor="" className='font-medium'>First name
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='Ram'
                        name='firstName'
                        value={formData.firstName}
                        onChange={changeHandler}
                    />
                </label>

                <label htmlFor="" className='font-medium'>Last name
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='Kumar'
                        name='lastName'
                        value={formData.lastName}
                        onChange={changeHandler}
                    />
                </label>

                <label htmlFor="" className='font-medium'>Email address
                    <input type="email" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='ram@gmail.com'

                        name='email'
                        value={formData.email}
                        onChange={changeHandler}

                    />
                </label>

                <label htmlFor="" className='font-medium'>Country
                    <select name="country" id="" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        value={formData.country}
                        onChange={changeHandler}
                    >
                        <option value="India" checked>India</option>
                        <option value="United States">United States </option>
                        <option value="Canada ">Canada  </option>
                        <option value="Mexico">Mexico </option>
                    </select>
                </label>

                <label htmlFor="" className='font-medium'>Street address
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='magantu colony salarpur noida sector 101'

                        name='streetAddress'
                        value={formData.streetAddress}
                        onChange={changeHandler}
                    />
                </label>

                <label htmlFor="" className='font-medium'>City
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='Noida'
                        name='city'
                        value={formData.city}
                        onChange={changeHandler}
                    />
                </label>

                <label htmlFor="" className='font-medium'>State / Province
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='UP'
                        name='state'
                        value={formData.state}
                        onChange={changeHandler}
                    />
                </label>

                <label htmlFor="" className='font-medium'>ZIP / Postal code
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='201304'
                        name="pin"
                        value={formData.pin}
                        onChange={changeHandler}
                    />
                </label>

                <div>
                    <p className='font-medium'>By Email </p>

                    <div className='flex gap-5 center mt-5'>
                        <input type="checkbox" name="comment" id="comment"
                            className='w-[20px] h-[20px] mt-[8px]'
                            checked={formData.comment}
                            onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor="comment" className='font-medium'>Comments</label>
                            <p className='text-[14px] none1'>Get notified when someones posts
                                a comment on a posting.</p>
                        </div>
                    </div>

                    <div className='flex gap-5 center mt-5'>
                        <input type="checkbox" name="candidate" id="candidate" className='w-[20px] h-[20px] 
                        mt-[8px]'

                            checked={formData.candidate}
                            onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor="candidate" className='font-medium'>Candidates</label>
                            <p className='text-[14px] none1'>Get notified when a
                                candidate applies for a job.</p>
                        </div>
                    </div>

                    <div className='flex gap-5 center mt-5'>
                        <input type="checkbox" name="offer" id="offer" className='w-[20px] h-[20px]
                         mt-[8px]'
                            checked={formData.offer}
                            onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor="offer" className='font-medium'>Offers</label>
                            <p className='text-[14px] none1'>Get notified when a
                                candidate accepts or rejects an offer.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mt-3'>
                    <h2 className='font-medium'>Push Notifications</h2>
                    <p>These are delivered via SMS to your mobile phone.</p>
                    <div className='flex flex-col gap-3 mt-5'>

                        <div className='flex gap-3'>
                            <input type="radio" name="notification" id="r1"
                                value="Everything"
                                checked={formData.notification === "Everything"}
                                onChange={changeHandler}
                            />
                            <label htmlFor="r1" className='font-medium'>Everything</label>
                        </div>

                        <div className='flex gap-3'>
                            <input type="radio" name="notification" id="r2"
                                value="same-as-email"
                                checked={formData.notification === "same-as-email"}
                                onChange={changeHandler}
                            />
                            <label htmlFor="r2" className='font-medium'>Same as email</label>
                        </div>

                        <div className='flex gap-3'>
                            <input type="radio" name="notification" id="r3"
                                value="no-push-notification"
                                checked={formData.notification === "no-push-notification"}
                                onChange={changeHandler}
                            />
                            <label htmlFor="r3" className='font-medium'> No push notifications</label>
                        </div>
                    </div>
                </div>
                <button className='bg-blue-600 
                text-white py-2 rounded-lg w-[80px] text-[18px]'> Save </button>
            </form>
        </div>
    )
}

export default Form