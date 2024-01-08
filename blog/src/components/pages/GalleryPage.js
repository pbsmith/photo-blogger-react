import React from 'react'
import Gallery from '../Gallery.js'
import './GalleryPage.css'
import Background from '../Background.js'

function GalleryPage() {
    return (
    <>
    <Background/>
        <div className='gallery-container'>
            <Gallery/>
        </div>
    </>
  )
}

export default GalleryPage