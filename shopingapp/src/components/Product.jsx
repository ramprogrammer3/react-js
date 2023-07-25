import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post))
    toast.success("Item added to cart!")
  }
  const removeFromCart = () => {
    dispatch(remove(post.id))
    toast.error("Item remove from cart!")
  }

  return (
    <div className='flex flex-col items-center justify-between
     hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border-2'>
      <div>
        <p className='text-gray-700
         font-semibold text-lg text-left truncate w-40 mt-1'> {post.title} </p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>
          {post.description.split(" ").splice(0, 10).join(" ")}... </p>
      </div>

      <div className='h-[180px]'>
        <img src={post.image} alt="" className='h-full w-full' />
      </div>

      <div className='flex gap-12 items-center w-full mt-5'>
        <div>
          <p className='text-green-600 font-semibold '> ${post.price} </p>
        </div>

        {
          cart.some((p) => p.id === post.id) ?
            <button className='text-gray-700 border-2 border-gray-700 p-1 px-3 uppercase
            rounded-full font-semibold text-[10px] hover:bg-gray-700 hover:text-white 
            transition duration-500 '
              onClick={removeFromCart}
            > Remove item </button > :
            <button onClick={addToCart} className='text-gray-700 border-2 border-gray-700 p-1 px-3 uppercase
            rounded-full font-semibold text-[10px] hover:bg-gray-700 hover:text-white 
            transition duration-500 '>Add to cart</button>
        }
      </div>

    </div>
  )
}

export default Product