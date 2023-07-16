import React from 'react'
import ProductItemDate from './ProductItemDate'

const ProductItem = () => {
    return (
        <div className='product_item'>
            <div className='product_date'>
                <ProductItemDate />
            </div>
            <div className='product_name'>Product name</div>
        </div>
    )
}

export default ProductItem