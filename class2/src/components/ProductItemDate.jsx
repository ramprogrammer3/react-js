import React from 'react'

const ProductItemDate = ({ date }) => {
    const day = date.toLocaleString('en-US', { day: "2-digit" })
    const month = date.toLocaleString('en-US', { month: "long" });
    const year = date.getFullYear();
    return (
        <div className='date'>
            <div> {month} </div>
            <div> {year} </div>
            <div> {day} </div>
        </div>
    )
}

export default ProductItemDate