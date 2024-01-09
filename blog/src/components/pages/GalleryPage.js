import React from 'react'
import Gallery from '../Gallery.js'
import './GalleryPage.css'
import Background from '../Background.js'
import '../../App.js'
function GalleryPage() {
    return (
    <>
    <div>
                        <Background />
        <div className='gallery-header'>
                <p className='header'>Choose an album from the gallery below...</p>
        </div>
        <div className='gallery-container'>
            <Gallery/>
        </div>
        </div>
    </>
  )
}

export default GalleryPage