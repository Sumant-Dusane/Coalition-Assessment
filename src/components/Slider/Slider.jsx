import React, { useState } from 'react';
import "./slider.scss";
const images = require.context('./../../assets/images/carousel', true);
const imageList = [(images.keys().map(image => images(image))), (images.keys().map(image => images(image)))];

export default function Slider() {
    const [slides, setSlides] = ([imageList.slice(0, 4)]);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    function MapSlides() {
        for (let i = 4; i < imageList.length; i += 4) {
            slides.push([imageList.slice(i, i + 4)]);
        }
        return slides.map((slide, indexSlide) => {
            return <div key={indexSlide} className='carousel__slide' id={`carousel-slide-${indexSlide}`}>
                {MapImages(slide, indexSlide)}
            </div>
        });
    }
    function MapImages(slide, indexSlide) {
        return slide.map((image, indexImage) => {
            return <img key={indexImage} src={image} alt={`image-${indexImage + (indexSlide - 1)}`} />
        });
    }
    function setActiveSlide(index) {
        setActiveSlideIndex(index);
        const newActiveSlide = document.getElementById(`carousel-slide-${index}`);
        newActiveSlide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    return (
        <div className="slider">
            <div className='carousel'>
                {MapSlides()}
            </div>
            <div className="slider__indicator">
                {
                    slides.map((dot, index) => {
                        return <button key={index} className={index === activeSlideIndex ? 'selected': ''} onClick={() => setActiveSlide(index)}></button> 
                    })
                }
            </div>
        </div>
    )
}
