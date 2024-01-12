import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React, { useState } from 'react'
import './Carousel.css'
//import IMG1 from './../images/IMG_8870.jpeg'
//import IMG2 from './../images/IMG_8898.jpeg'
//import IMG3 from './../images/IMG_8939.jpeg'
//import IMG4 from './../images/IMG_8952.jpeg'


/** For the sake of learning about react.js I purposely wanted to figure out how to
 *  get the images imported as props, through setting break points and debugging I figured out
 *  that the images were carrying a collection of arrays instead of just the image array itself
 */

function Carousel(imageUrls) {

const [imageIndex, setImageIndex] = useState(0)

//const imageUrls = [
//  IMG1,
//  IMG2,
//  IMG3,
//  IMG4
//]

  function showPrevImage() {
    setImageIndex(imageIndex => {
      if(imageIndex===0) {
        return 3;
      }
      else {
        return imageIndex-1;
      }
    })
  }

  function showNextImage() {
    setImageIndex(imageIndex => {
      if(imageIndex!==3) {
        return imageIndex+1;
      }
      else {
        return 0;
      }
    })
  }

  return (
        <div className='img-carousel-container'>
            <img src={imageUrls.imageUrls[imageIndex]} alt='Carousel' className='image'/>
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