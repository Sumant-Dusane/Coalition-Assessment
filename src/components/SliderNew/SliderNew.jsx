import React from 'react';
import Slider from "react-slick";
import "./slidernew.scss";
const images = require.context('./../../assets/images/carousel', true);
const imageList = images.keys().map(image => images(image));

export default function SliderNew() {
    var settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    function MapImages() {
        return imageList.map((image, indexImage) => {
            console.log(imageList);
            return <img key={indexImage} src={image} alt={`image-${indexImage}`} />
        });
    }
    return (
        <div className="slider">
            <Slider {...settings} responsive={settings.responsive}>
                {MapImages()}
            </Slider>
        </div>
    )
}
