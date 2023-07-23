import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

import frameImage from "../assets/frame.png"

const Template = ({ title, des1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div>
            <div>
                <h1> {title} </h1>
                <p>
                    <span> {des1} </span>
                    <span> {desc2} </span>
                </p>

                {formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <button> Sign Up with Google  </button>
            </div>

            <div>
                <img src={frameImage} alt="pattern" width={558} height={504} loading='lazy' />
                <img src={image} alt="students" width={558} height={504} loading='lazy' />
            </div>

        </div>
    )
}

export default Template