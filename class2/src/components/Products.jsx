import React from 'react'
import ProductItem from './ProductItem'

const Products = ({ items }) => {

    return (
        <div className='products'>
            <ProductItem items={items[0]} />
            <ProductItem items={items[1]} />
            <ProductItem items={items[2]} />
            <ProductItem items={items[3]} />
        </div>
    )
}

export default Products