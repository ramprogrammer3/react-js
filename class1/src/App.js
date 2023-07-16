import React from 'react'
import Item from './components/Item'
import ItemDate from './components/ItemDate'

const App = () => {

  const response = [
    {
      itemName: "Nirma",
      itemDate: "07",
      itemMonth: "April",
      itemYear: "1998"
    },

    {
      itemName: "Serf Excel",
      itemDate: "07",
      itemMonth: "November",
      itemYear: "1998"
    },

    {
      itemName: "Tide",
      itemDate: "11",
      itemMonth: "December",
      itemYear: "2002"
    },

  ]

  return (
    <div className='app'>
      <h1>This is first react class </h1>
      <div className='white'>

        <Item name={response[0].itemName} ></Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>


        <Item name={response[1].itemName} ></Item>
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

        <Item name={response[2].itemName} ></Item>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>


      </div>
    </div>
  )
}

export default App