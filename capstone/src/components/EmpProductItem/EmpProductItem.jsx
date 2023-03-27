import React, { useState } from 'react';
import './EmpProductItem.css'

import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiOutlineCloudUpload, AiFillFileImage } from 'react-icons/ai';

function EmpProductItem({ label, defaultOn }) {
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No Selected file")
    const [isOn, setIsOn] = useState(defaultOn);

    const handleToggle = () => {
        setIsOn(!isOn);
    };
    return (
        <div className="toggle-button" onClick={handleToggle}>
            <div className={`toggle-switch ${isOn ? 'on' : 'off'}`}>
                <div className="toggle-thumb"></div>
            </div>
            <span className="toggle-label">{label}</span>
        </div>
    )
}

export default EmpProductItem;