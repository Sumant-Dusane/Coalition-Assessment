import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = require.context('./../../assets/images/carousel', true);
const imageList = images.keys().map(image => images(image));

export default function Slider() {
    function MapImages() {
        return imageList.map((image, index) => {
            return <div>
                <img key={index} src={image} alt={`image-${index}`}/>
            </div>
        });
    }
    return (
        <div className='carousel'>
            <Carousel>
                {MapImages()}
            </Carousel>
        </div>
    )
}
