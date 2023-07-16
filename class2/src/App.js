import React from 'react'
import Products from './components/Products'

const App = () => {
  const products = [

    {
      title: "Nirma",
      date: new Date(2021, 8, 10)
    },

    {
      title: "Serf Excel",
      date: new Date(2021, 2, 2)
    },

    {
      title: "Tide",
      date: new Date(2021, 12, 23)
    },

    {
      title: "wheel",
      date: new Date(2021, 5, 5)
    },

  ]
 
  return (
    <div className='app'>
      <Products items = {products} />
    </div>
  )
}

export default App