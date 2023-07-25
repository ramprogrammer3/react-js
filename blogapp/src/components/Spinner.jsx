import React from 'react'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center h-full flex-col gap-2'>
      <div className="custom-loader"></div>
      <h1>Loading....</h1>
    </div>
  )
}

export default Spinner