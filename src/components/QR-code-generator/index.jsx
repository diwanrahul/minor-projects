import { useState } from "react";
import QRCode from "react-qr-code"
export default function QRCodeGenerator(){

    const [qrCode, setQRCode] = useState('');
    const [input, setInput] = useState('');

    const handleGenerateQRCode= ()=>{
        setQRCode(input);
        setInput('');
    }
    return(
        <div 
        className="flex flex-col gap-5 justify-center items-center">
            <h1 
            className="bg-orange-500 p-2 mt-5 rounded-sm">QR Code Generator</h1>
            <div
             className="flex gap-3">
                <input 
                className="outline p-2 rounded-sm"
                onChange={(e)=>setInput(e.target.value)}
                 type="text"
                placeholder="Enter your value" 
                value={input}
                />
                <button 
                className="bg-blue-500 text-white p-2 cursor-pointer"
                disabled={input && input.trim() !== ""
            ? false 
            : true 
        }
                onClick={handleGenerateQRCode}>Generate</button>
            </div>
            <div>
                <QRCode
                id="qr-code-value"
                value={qrCode} size={400} bgColor="#fff" />
            </div>
        </div>
    )
}