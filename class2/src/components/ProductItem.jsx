import React from 'react'
import ProductItemDate from './ProductItemDate'

const ProductItem = ({items}) => {
  
    return (
        <div className='product_item'>
            <div className='product_date'>
                <ProductItemDate date = {items.date} />
            </div>
            <div className='product_name'> {items.title} </div>
        </div>
    )
}

export default ProductItem