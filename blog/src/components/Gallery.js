import React from 'react'
import PhotoAlbum from "react-photo-album";
import './Gallery.css'

/**Looking to present entire photo album? Or create multiple galleries? */

const photos = [
    { src: "true-placeholder.jpeg", width: 800, height: 600 },
    { src: "true-placeholder.jpeg", width: 1600, height: 900 },
    { src: "true-placeholder.jpeg", width: 1600, height: 900 },
    { src: "true-placeholder.jpeg", width: 800, height: 600 },
    { src: "true-placeholder.jpeg", width: 800, height: 600 },
    { src: "true-placeholder.jpeg", width: 1600, height: 900 },
    { src: "true-placeholder.jpeg", width: 1600, height: 900 },
    { src: "true-placeholder.jpeg", width: 800, height: 600 },
    { src: "true-placeholder.jpeg", width: 800, height: 600 },
    { src: "true-placeholder.jpeg", width: 1600, height: 900 },
    { src: "true-placeholder.jpeg", width: 800, height: 600 },
];

function Gallery() {
    return (
        <>
            <div className='photo-album-container'>
                <PhotoAlbum layout="rows" photos={photos} />
            </div>
        </>
    )
}

export default Gallery