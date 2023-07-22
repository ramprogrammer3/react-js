import React from 'react'

const Form = () => {
    return (
        <div>
            <form action="" className='flex flex-col gap-2'>

                <label htmlFor="" className='font-medium'>First name
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='Ram' />
                </label>

                <label htmlFor="" className='font-medium'>Last name
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='Kumar' />
                </label>

                <label htmlFor="" className='font-medium'>Email address
                    <input type="email" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='ram@gmail.com' />
                </label>

                <label htmlFor="" className='font-medium'>Country
                    <select name="" id="" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'>
                        <option value="India">India</option>
                        <option value="United States">United States </option>
                        <option value="Canada ">Canada  </option>
                        <option value="Mexico">Mexico </option>
                    </select>
                </label>

                <label htmlFor="" className='font-medium'>Street address
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='magantu colony salarpur noida sector 101' />
                </label>

                <label htmlFor="" className='font-medium'>City
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='Noida' />
                </label>

                <label htmlFor="" className='font-medium'>State / Province
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='UP' />
                </label>

                <label htmlFor="" className='font-medium'>ZIP / Postal code
                    <input type="text" className='border
                     border-blue-300 w-full p-2 mt-1 rounded-lg'
                        placeholder='201304' />
                </label>

                <div>
                    <p className='font-medium'>By Email </p>

                    <div className='flex gap-5 center mt-5'>
                        <input type="checkbox" name="" id="comment" className='w-[20px] h-[20px] mt-[8px]' />
                        <div>
                            <label htmlFor="comment" className='font-medium'>Comments</label>
                            <p className='text-[14px] none1'>Get notified when someones posts a comment on a posting.</p>
                        </div>
                    </div>

                    <div className='flex gap-5 center mt-5'>
                        <input type="checkbox" name="" id="candidate" className='w-[20px] h-[20px] mt-[8px]' />
                        <div>
                            <label htmlFor="candidate" className='font-medium'>Candidates</label>
                            <p className='text-[14px] none1'>Get notified when a candidate applies for a job.</p>
                        </div>
                    </div>

                    <div className='flex gap-5 center mt-5'>
                        <input type="checkbox" name="" id="offer" className='w-[20px] h-[20px] mt-[8px]' />
                        <div>
                            <label htmlFor="offer" className='font-medium'>Offers</label>
                            <p className='text-[14px] none1'>Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mt-3'>
                    <h2 className='font-medium'>Push Notifications</h2>
                    <p>These are delivered via SMS to your mobile phone.</p>
                    <div className='flex flex-col gap-3 mt-5'>

                        <div className='flex gap-3'>
                            <input type="radio" name="notify" id="r1" />
                            <label htmlFor="r1" className='font-medium'>Everything</label>
                        </div>

                        <div className='flex gap-3'>
                            <input type="radio" name="notify" id="r2" />
                            <label htmlFor="r2" className='font-medium'>Same as email</label>
                        </div>

                        <div className='flex gap-3'>
                            <input type="radio" name="notify" id="r3" />
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