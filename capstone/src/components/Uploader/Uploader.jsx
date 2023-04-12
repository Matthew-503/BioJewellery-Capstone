import React from 'react'
import './Uploader.css'

import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useSelector } from 'react-redux';

function Uploader({onImageUpload}) {
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No Selected file")
    const [imageFile, setImageFile] = useState(null)

    return (
        <div className='upload'>
            <div>
                <div onClick={() => document.querySelector(".upload__input").click()}>
                    <input
                        type="file"
                        name='productpic'
                        accept='image/*'
                        className="upload__input"
                        hidden
                        onChange={({ target: { files } }) => {
                            if (files) {
                                setFileName(files[0].name)
                                setImage(URL.createObjectURL(files[0]))
                                onImageUpload(setImageFile(files[0]));
                            }
                        }}
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