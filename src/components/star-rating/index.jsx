/* eslint-disable react/prop-types */

import { useState } from "react";
import {FaStar} from "react-icons/fa";
export default function StarRating({noOfStars = 5}){
    
    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(0);
   

    const handleClick=(index)=>{
        // console.log(index);
setRating(index);

    }
    const handleMouseEnter=(index)=>{
        console.log(index);
        setHover(index)

    }
    const handleMouseLeave=()=>{
        // console.log(index);
        setHover(rating);
    }
    return(
        <div className="flex">
            {
                [...Array(noOfStars)].map((_, index)=>{
                    index += 1;
                    return <FaStar 
                    key={index}
                    onClick={()=> handleClick(index)}
                    onMouseMove={()=> handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                    className={index <= (hover || rating) ? "text-yellow-400": ""}
                    />
                })
            }
        </div>
    )
}