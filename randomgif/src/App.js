import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background items-center'>
      <h1 className='bg-white rounded-lg  font-bold text-[16px] sm:text-2xl
      mx-auto w-11/12 flex justify-center mt-5 py-2'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center'>
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App