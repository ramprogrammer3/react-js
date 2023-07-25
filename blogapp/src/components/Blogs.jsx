import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

const Blogs = () => {

    // consuem
    const { loading, post } = useContext(AppContext)

    return (
        <div className='my-20 w-10/12 max-w-[530px] py-2 flex flex-col gap-y-6  '>

            {
                loading ?

                    (<Spinner />) :

                    (
                        post.length === 0 ? (<div>
                            <p>No post Found </p>
                        </div>) : (
                            post.map((item) => (
                                <div key={item.id}>
                                    <p className="font-bold text-sm">{item.title} </p>
                                    <p className='text-[10px] font-bold'>By <span className='italic'>{item.author} </span> on <span className='underline font-bold'> {item.category} </span></p>
                                    <p className='text-[10px]'>Posted on {item.date} </p>
                                    <p className='text-sm mt-5 mb-1'> {item.content} </p>
                                    <div className='flex gap-x-2 flex-wrap'>
                                        {item.tags.map((tag, index) => {
                                            return <span key={index}
                                                className='text-[10px] text-blue-500 underline 
                                            font-bold'
                                            > {`#${tag}`} </span>
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