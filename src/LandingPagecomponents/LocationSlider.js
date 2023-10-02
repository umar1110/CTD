import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CurrentLocationSliderItem from './CurrentLocationSliderItem';


export default function LocationSlider() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 664, min: 0 },
            items: 2
        }
    };
    return (
        <div className="slider mb-[100px]">

        <Carousel responsive={responsive}>
            <CurrentLocationSliderItem/>
            <CurrentLocationSliderItem/>
            <CurrentLocationSliderItem/>
            <CurrentLocationSliderItem/>
            <CurrentLocationSliderItem/>
            <CurrentLocationSliderItem/>
            <CurrentLocationSliderItem/>
            <CurrentLocationSliderItem/>

        </Carousel>
        </div>)

}
