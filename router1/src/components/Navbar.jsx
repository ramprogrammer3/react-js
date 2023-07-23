import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/support"><li>Suport</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/labs"><li>Labs</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar