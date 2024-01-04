import React from 'react'
import PhotoAlbum from "react-photo-album";

/**Looking to present entire photo album? Or create multiple galleries? */

const photos = [
    { src: "true-placeholder.jpeg", width: 800, height: 600 },
    { src: "true-placeholder.jpeg", width: 1600, height: 900 },
    { src: "true-placeholder.jpeg", width: 800, height: 600 },
    { src: "true-placeholder.jpeg", width: 800, height: 600 },
    { src: "true-placeholder.jpeg", width: 1600, height: 900 },
    { src: "true-placeholder.jpeg", width: 1600, height: 900 },
    { src: "true-placeholder.jpeg", width: 800, height: 600 },
    { src: "true-placeholder.jpeg", width: 1600, height: 900 },
];

function Gallery() {
    return (
        <>
            <PhotoAlbum layout="rows" photos={photos} />
        </>
    )
}

export default Gallery