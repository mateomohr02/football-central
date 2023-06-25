import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material'
import ArrowDropUpIcon from '@mui/icons-material'

const NewPost = () => {
    const [showInput, setShowInput] = useState(false);
    const [postText, setPostText] = useState('');
    const [postImage, setPostImage] = useState('');

    const handlePost =(event) => {
        setPostText({
            ...postText,
            [event.target.text]: event.target.value,
        });
    }

    const handleImage = (event) => {
        setPostImage({
            ...postImage,
            [event.target.text]: event.target.value,
        })
    }

    return (
        <div>
            <input
                onClick={() => { setShowInput(true) }}
                type='text'
                placeholder='PUBLICA ALGO'
                onChange={handlePost}
                value={postText}
            />
            {showInput &&
                <div>
                    <ImageIcon />
                    <input
                        type='text'
                        placeholder='subir imagen'
                        onChange={handleImage}
                        value={postImage}
                    />
                    <ArrowDropUpIcon onClick={() => {setShowInput(false)}}/>
                </div>
            }
            <div>
                <button>PUBLICAR</button>
            </div>

        </div>
    )
}

export default NewPost