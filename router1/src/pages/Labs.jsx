import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate = useNavigate();
    function clickHandler() {
        navigate("/about")
    }
    return (
        <div>
            <p>This is labs page </p>
            <button onClick={clickHandler}>Move to About page </button>
        </div>
    )
}

export default Labs