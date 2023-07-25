import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const { page, handlePageChange, totalPages } = useContext(AppContext)
    return (
        <div className='shadow-md w-full fixed bottom-0 bg-white border-2'>
            <div className='w-10/12 max-w-[530px] mx-auto flex justify-between items-center py-2'>
                <div className='flex gap-x-2'>
                    {page > 1 &&
                        <button onClick={() => handlePageChange(page - 1)} className='border py-1 px-2 font-medium rounded-lg text-[12px] sm:text-[16px]'>
                            Previous
                        </button>
                    }

                    {
                        page < totalPages &&
                        <button onClick={() => handlePageChange(page + 1)} className='border py-1 px-2 font-medium rounded-lg text-[12px] sm:text-[16px]'>
                            Next
                        </button>
                    }
                </div>
                <p className='text-[12px] sm:text-[16px]'>
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    )
}

export default Pagination