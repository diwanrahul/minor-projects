import { useState } from "react";
import Modal from "./modal";
import './style.css'
export default function ModalTest(){

    const [showModalPopup, setShowModalPopup] = useState(false);

    const handleToggleModalPopup = () => {
            setShowModalPopup(!showModalPopup)
    }
    return (
        <div>
            <button
            onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal setShowModalPopup={setShowModalPopup}
                showModalPopup={showModalPopup}
                />
            }
        </div>
    )
}