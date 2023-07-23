import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>This is about page </p>
            <button onClick={() => navigate("/")}>Move to home page </button>
        </div>
    )
}

export default About