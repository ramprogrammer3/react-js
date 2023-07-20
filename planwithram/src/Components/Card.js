import React, { useState } from 'react'

const Card = ({ name, image, info, price, id, removeTour }) => {

    const [readMore, setReadMore] = useState(false);

    const description = info.substring(0, 200);

    const readMoreHandler = () => {
        setReadMore(!readMore)
    }
    return (
        <div className='card'>
            <img src={image} alt="" className='image' />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className='tour-price'> {price} </h4>
                    <h4 className='tour-name'> {name} </h4>
                </div>
                <div className='tour-description'>
                    {readMore ? info : description}
                    <span onClick={readMoreHandler} className='read-more'>
                        {readMore ? `...show less` : `... read more`}
                    </span>
                </div>
            </div>
            <button className='btn-red' onClick={() => removeTour(id)}> Not Interested </button>
        </div>
    )
}

export default Card