import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React, { useState } from 'react'
import './Carousel.css'
import IMG1 from './../images/IMG_8870.jpeg'
import IMG2 from './../images/IMG_8898.jpeg'
import IMG3 from './../images/IMG_8939.jpeg'
import IMG4 from './../images/IMG_8952.jpeg'


function Carousel(testImage) {

const [imageIndex, setImageIndex] = useState(0)

const imageUrls = [
  IMG1,
  IMG2,
  IMG3,
  IMG4
]

  function showPrevImage() {
    setImageIndex(imageIndex => {
      if(imageIndex===imageUrls.length-1) {
        return 0;
      }
      else {
        return imageIndex-1;
      }
    })
  }

  function showNextImage() {
    setImageIndex(imageIndex => {
      if(imageIndex===0) {
        return imageUrls.length-1;
      }
      else {
        return imageIndex+1;
      }
    })
  }

  return (
        <div className='img-carousel-container'>
            <img src={imageUrls[imageIndex]} alt='Carousel' className='image'/>
            <button className='img-button' onClick={showPrevImage}>
              <ArrowBigLeft/>
            </button>
            <button className='img-button img-button-right' onClick={showNextImage}>
              <ArrowBigRight/>
            </button>
        </div>
    )
}

export default Carousel