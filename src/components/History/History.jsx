import React from 'react';
import "./history.scss";
import Slider from '../Slider/Slider';
import SliderNew from '../SliderNew/SliderNew';

export default function History() {
  return (
    <div className='history' id='history'>
      <div className="text__block">
        <div className="text__block__wrapper">
          <span>01.</span>
          <h1>History</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
        </div>
      </div>
      <div className="history__carousel">
        <div className="wrapper">
          {/* <Slider /> */}
          <SliderNew />
        </div>
      </div>
    </div>
  )
}
