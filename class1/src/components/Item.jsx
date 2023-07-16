import React from 'react'

const Item = (props) => {
    return (
        <div>
            <div> {props.name}  </div>
            {props.children}
        </div>
    )
}

export default Item