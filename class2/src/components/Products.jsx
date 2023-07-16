import React from 'react'
import ProductItem from './ProductItem'

const Products = ({ items }) => {

    return (
        <div className='products'>
            <ProductItem items={items[0]} />
        </div>
    )
}

export default Products