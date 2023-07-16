import React from 'react'

const ItemDate = ({ day, month, year }) => {
    return (
        <div className='item_date'>

            <span> {day} </span>
            <span> {month} </span>
            <span> {year} </span>

            <hr />
        </div>

    )
}

export default ItemDate