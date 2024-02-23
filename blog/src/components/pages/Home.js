import React from 'react';
import '../../App.js';
import './Home.css';
import Background from '../Background.js';
import Carousel from '../Carousel.js';
import IMG1 from '../../images/IMG_8870.jpeg'
import IMG2 from '../../images/IMG_8898.jpeg'
import IMG3 from '../../images/IMG_8939.jpeg'
import IMG4 from '../../images/IMG_8952.jpeg'


function Home() {

    const slides = [
        IMG1,
        IMG2,
        IMG3,
        IMG4
    ]

    return (
        <>
            <Background />
            <div>
                <div className='home-header'>
                    <h1 className='home-header-text'>Welcome</h1>
                    <h2 className='home-header-subtext'>To the jmee Image Gallery</h2>
                </div>
                <div className='card-container'>
                    <div className='carousel-container'>
                        <Carousel imageUrls={slides}/>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <h2 className='card-header'>Text Here</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis libero sed dolor posuere porttitor. Curabitur egestas leo in aliquam fringilla. 
                        Vivamus in suscipit augue. Nulla vulputate leo vitae eros commodo, eget dignissim eros consectetur. Etiam quis ornare odio, dignissim pellentesque quam. 
                        Donec odio massa, ornare vitae lectus vel, aliquam aliquet leo. Nam ut lacus eu magna ullamcorper posuere a euismod nunc.
                        </p>
                    </div>
                    <div className='card'>
                        <h2 className='card-header'>Text Here</h2>
                        <p>Morbi egestas feugiat massa id mollis. Etiam ac cursus orci. Nulla eget commodo tellus, sollicitudin venenatis felis. 
                        Fusce ac elementum eros, et luctus urna. Praesent in iaculis sem. Vestibulum placerat eros tortor, sollicitudin sagittis leo consequat nec. 
                        Morbi augue ante, dignissim nec sem ut, malesuada rhoncus nunc. Maecenas fermentum semper justo, et ultrices mi facilisis commodo.
                        </p>
                    </div>
                    <div className='card'>
                        <h2 className='card-header'>Text Here</h2>
                        <p>Aliquam fermentum libero a gravida eleifend. Phasellus tempor, orci ac laoreet congue, eros mi placerat magna, vel iaculis lacus leo vel nisi. 
                        In dictum porttitor massa, ac gravida augue viverra sit amet. Sed ut nunc non diam dignissim molestie id at augue. 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ultrices nulla vel quam scelerisque, sit amet egestas odio pharetra.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home