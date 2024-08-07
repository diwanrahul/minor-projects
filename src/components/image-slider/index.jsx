import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css';

export default function ImageSlider({url, page, limit})  {

    const [Images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchImages = async(getUrl) => {
       try {
        setLoading(true);
        // console.log(getUrl);
        const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const data = await res.json();
        if(data){
            setImages(data);
        }
        setLoading(false); 
        
       } catch (error) {
        console.error(error);
        setLoading(false);   
       }
    }
    useEffect(()=>{
        if(url !== "") fetchImages(url);
    },[url]);
console.log(Images);
    if(loading){
        return <div>Loading data! Please wait</div>
    }

    if(error !== null){
        return <div>Error Occured</div>
    }

    const handlePrevious = () =>{
setCurrentSlide(currentSlide === 0 ? Images.length-1 : currentSlide-1);
    }

    const handleNext = () =>{
setCurrentSlide(currentSlide === Images.length-1 ? 0 : currentSlide+1);
    }
     return (
        <div className="container">
            <BsArrowLeftCircleFill 
            onClick={handlePrevious}
            className="arrow arrow-left"/>
            {
                Images && Images.length 
                ? Images.map((imageItem, index)=>(
                    <img 
                    key={imageItem.id}
                    src={imageItem.download_url} 
                    alt={imageItem.download_url} 
                    className={currentSlide === index ? "current-image" 
                    : "current-image hide-current-image"}
                    />
                ))
                : null
            }
            <BsArrowRightCircleFill
            onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
            {
                Images && Images.length
                ? Images.map((_, index)=>(
                    <button 
                    onClick={()=>setCurrentSlide(index)}
                    key={index}
                    className={currentSlide === index
                        ? "current-indicator"
                    : " current-indicator hide-current-indicator"} ></button>
                ))
                :null
            }</span>
        </div>
     )
}