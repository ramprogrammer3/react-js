import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/CounterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className='w-screen h-screen flex gap-4 justify-center items-center flex-col bg-gray-700'>
      <h1 className='text-2xl text-blue-600'> Increment & Decrement  </h1>
      <div className='flex gap-x-3 bg-white items-center'>
        <button onClick={() => dispatch(increment())} className='text-2xl px-5  border-r
         border-r-gray-700'> + </button>
        <div className='text-2xl px-5 '> {count} </div>
        <button onClick={() => dispatch(decrement())} className='text-2xl border-l border-gray-700 px-5'> - </button>
      </div>
    </div>
  )
}

export default App