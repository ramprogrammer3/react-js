import React from 'react'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center mt-[-50px] h-screen flex-col gap-2'>
      <div className="custom-loader"></div>
      <h1>Loading....</h1>
    </div>
  )
}

export default Spinner