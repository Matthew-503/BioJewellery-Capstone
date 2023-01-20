import React from 'react'
import './Uploader.css'

import { useState } from 'react';
import { MdCloudUpload, MdDelete} from 'react-icons/md'
import { AiFillFileImage} from 'react-icons/ai'

function Uploader () {
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No Selected file")
    return (
        <main>
            <form 
            onClick={() => document.querySelector(".input-field").click()}
            >
            <input  type="file" multiple="multiple" accept='image/*' className="input-field" hidden
            onChange={({target: {files}}) => {
              files[0] && setFileName(files[0].name)  
              if(files){
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
                        onClick={ () => {
                            setFileName("No Selected Files")
                            setImage(null)
                        }}
                        />
                    </span>
                </section>

        </main>
    )
}

export default Uploader;