import React, { useState } from 'react'
import ProductItemDate from './ProductItemDate'

const ProductItem = ({ items }) => {

    const [title, setTitle] = useState(items.title)

    const clickHandler = () => {
        setTitle("Popcorn")
    }

    return (
        <div className='product_item'>
            <div className='product_date'>
                <ProductItemDate date={items.date} />
            </div>
            <div className='product_name'> {title} </div>
            <button onClick={clickHandler}> Add to cart </button>
        </div>
    )
}

export default ProductItem