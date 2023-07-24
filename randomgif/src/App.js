import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background'>
      <h1 className='bg-white rounded-lg mx-auto w-11/12 flex justify-center mt-5 py-2'>RANDOM GIFS</h1>
      <div className='flex flex-col'>
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App