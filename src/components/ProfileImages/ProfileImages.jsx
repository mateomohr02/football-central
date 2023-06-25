import React, { useState } from 'react';

const ProfileImages = () => {
    const [images, setImages] = useState([
        'url_de_la_imagen'
    ]);

    return (
        <div>
            {images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Imagen ${index}`}/>
            ))}
        </div>
    );
};

export default ProfileImages;