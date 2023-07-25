import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

const Blogs = () => {

    // consuem
    const { loading, post } = useContext(AppContext)

    return (
        <div>

            {
                loading ?

                    (<Spinner />) :

                    (
                        post.length === 0 ? (<div>
                            <p>No post Found </p>
                        </div>) : (
                            post.map((item) => (
                                <div key={item.id}>
                                    <p className="font-bold">{item.title} </p>
                                    <p>By <span>{item.author} </span> on <span> {item.category} </span></p>
                                    <p>Posted on {item.date} </p>
                                    <p> {item.content} </p>
                                    <div>
                                        {item.tags.map((tag, index) => {
                                            return <span key={index}> {`#${tag}`} </span>
                                        })}
                                    </div>
                                </div>
                            ))
                        )
                    )
            }

        </div>
    )
}

export default Blogs