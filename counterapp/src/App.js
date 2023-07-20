import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const decreaseHandler = () => {

    setCount(count - 1);

  }

  const increaseHandler = () => {
    setCount(count + 1);
  }

  const resetHandler = () => {
    setCount(0);
  }

  return (
    <div className='flex w-[100vw] h-[100vh] justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className='text-[#0398d4] font-medium text-2xl'>Increment & Decrement </div>
      <div className='flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
        <button className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'

          onClick={decreaseHandler}

        > - </button>
        <div className='font-bold gap-12 text-5xl'> {count} </div>
        <div

          onClick={increaseHandler}

          className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'> + </div>
      </div>
      <button className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'

        onClick={resetHandler}

      >Reset</button>
    </div>
  )
}

export default App