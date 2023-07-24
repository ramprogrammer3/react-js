import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const Random = () => {

    const [gif, setGif] = useState("");

    async function fetchData() {
        
        const output = await axios.get(url);
        console.log(output)
    }

    useEffect(() => {
        fetchData()
    }, [])

    function clickHandler() {

    }

    return (
        <div className='w-1/2  h-[300px] flex flex-col items-center gap-y-5 mt-[15px]
         bg-green-400 
          rounded-lg border border-black'>
            <h1 className='text-2xl underline uppercase font-medium'>A Random Gif</h1>
            <img src="" alt="" width={450} />
            <button onClick={clickHandler}

                className='w-9/12 bg-white text-lg py-2 rounded-lg font-medium'
            >Generate</button>
        </div>
    )
}

export default Random

// https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}