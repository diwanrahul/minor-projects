import { useEffect, useState } from "react";


export default function RandomColor (){

    const [color, setColor] = useState("while");
    const [colorType, setColorType] = useState("hex");
   

    const randomNumber = (length) => {
        return Math.floor(Math.random()*length);
    }
    const handleCreateRandomHexColor = () => {
        const hex = "0123456789ABCDEF";
        let hexColor = "#";

        for(let i=0;i<6;i++){
            hexColor += hex.charAt(randomNumber(hex.length))
        }
       
        setColor(hexColor);
        console.log("HEX");
    }
    const handleCreateRandomRgbColor = () => {
        const r = randomNumber(255);
        const g = randomNumber(255);
        const b = randomNumber(255);

        let rgb = "rgb"+"("+r+","+g+","+b+")";
        setColor(rgb);
        console.log("RGB");
        
    }
    useEffect(()=>{
        (colorType === 'rgb')
        ? handleCreateRandomRgbColor()
        : handleCreateRandomHexColor();
    },[colorType])
    

    return (
        <div 
        className={`h-[100vh] w-12/12 outline  flex-col flex gap-5 items-center `}
        style={{backgroundColor:color}}
        >
            <button onClick={()=> setColorType("hex")} className="border-2 h-24 text-base">Create HEX code</button>
            <button 
            className="border-2 h-24 text-base"
            onClick={()=> setColorType("rgb")}>Create RGB code</button>
            <button 
            className="border-2 h-24 text-base"
            onClick={colorType === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        <h3>{colorType === 'hex' ? "HEX" : "RGB"}</h3>
        <h1>{color}</h1>
        </div>
    )
}