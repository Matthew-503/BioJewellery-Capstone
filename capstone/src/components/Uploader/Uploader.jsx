import React from 'react'
import './Uploader.css'

import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useSelector } from 'react-redux';

function Uploader({onImageUpload}) {
    const [image, setImage] = useState('')
    const [fileName, setFileName] = useState("No Selected file")
    const [imageFile, setImageFile] = useState(null)
    
    const handleChange = (e) => {
        setFileName(e.target.files[0].name);
        setImage(URL.createObjectURL(e.target.files[0]));
        const file = e.target.files[0]
        setImageFile(file);

        console.log(imageFile);
    };

    return (
        
        <div className='upload'>
            <div>
                <div onClick={() => document.querySelector(".upload__input").click()}>
                    
                    <input
                        type="file"
                        name='imageFile'
                        accept='image/*'
                        className="upload__input"
                        hidden
                        onChange={handleChange}
                    />

                    {image ?
                        <img src={image} alt={fileName} />
                        :
                        <>
                            <div className='upload__icons-upload'>
                                <AiOutlineCloudUpload color='#1475cf' size={60} />
                            </div>

                            <p>Browse Files to Upload</p>
                        </>
                    }


                    <div>
                        <h1>{fileName}</h1>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Uploader;