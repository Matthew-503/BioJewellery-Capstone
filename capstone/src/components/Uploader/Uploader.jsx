import React from 'react'
import './Uploader.css'

import { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiOutlineCloudUpload, AiFillFileImage } from 'react-icons/ai';

function Uploader() {
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No Selected file")
    return (
        <div className='upload'>
            <div>
                <div onClick={() => document.querySelector(".upload__input").click()}>
                    <input
                        type="file"
                        name='productpic'
                        multiple="multiple"
                        accept='image/*'
                        className="upload__input"
                        hidden
                        onChange={({ target: { files } }) => {
                            files[0] && setFileName(files[0].name)
                            if (files) {
                                setImage(URL.createObjectURL(files[0]))
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

                    {/* <div className='upload-row'>
                        <div className='upload__icons-upload'>
                            <MdDelete
                                onClick={() => {
                                    setFileName("No Selected Files")
                                    setImage(null)
                                }}
                            />
                        </div>
                    </div> */}

                    <div>
                        <h1>{fileName}</h1>
                    </div>
                </div>
            </div>


            {/* <form
            >
                <input type="file" multiple="multiple" accept='image/*' className="input-field" hidden
                    onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name)
                        if (files) {
                            setImage(URL.createObjectURL(files[0]))
                        }
                    }}
                />
                {image ?
                    <img src={image} width={150} height={150} alt={fileName} />
                    :
                    <>
                        <MdCloudUpload color='#1475cf' size={60} />
                        <p>Browse Files to Upload</p>
                    </>
                }
            </form>
            <section className='uploaded-row'>
                <AiFillFileImage color='#1475cf' />
                <span className='upload-content'>
                    {fileName}
                    <MdDelete
                        onClick={() => {
                            setFileName("No Selected Files")
                            setImage(null)
                        }}
                    />
                </span>
            </section> */}

        </div>
    )
}

export default Uploader;