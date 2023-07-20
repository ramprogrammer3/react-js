import React from 'react'
import Card from './Card'


const Tours = ({ tours , removeTour }) => {
    return (
        <div>
            <div>
                <h2> Plan with ram </h2>
            </div>
            <div>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour = {removeTour} />
                    })
                }
            </div>
        </div>
    )
}

export default Tours