import React from 'react'
import './mouseGif.css'

import MouseGifImage from "../assets/scroll-down.gif"
const MouseGif = () => {
    return <div >
            <img  className='mouse-gif' src={MouseGifImage} alt="this is scroll hints" />
    </div>
}

export default MouseGif;


