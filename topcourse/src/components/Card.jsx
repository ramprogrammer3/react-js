import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify'

const Card = ({ course, likedCourses, setLikedCourses }) => {

  function clickHandler() {

    if (likedCourses.includes(course.id)) {

      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)))

      toast.warning("Like removed");

    } else {
      if (likedCourses.length === 0) {

        setLikedCourses(course.id)

      } else {

        setLikedCourses((prev) => [...prev, course.id])

      }

      toast.success("Liked Successfully");

    }
  }

  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>

      <div className='relative'>
        <img src={course.image.url} alt="" className='' />

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-1 grid place-items-center'>
          <button onClick={clickHandler}>

            {
              !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) : (<FcLike fontSize="1.75rem" />)
            }
          </button>
        </div>

      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'> {course.title} </p>
        <p className='text-white mt-2 '> {course.description.substring(0, 100)}... </p>
      </div>

    </div>
  )
}

export default Card