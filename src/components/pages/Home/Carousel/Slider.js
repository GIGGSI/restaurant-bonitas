import React, { useState, useEffect } from 'react'
import Arrows from './Arrows'
import Dots from './Dots'
import SliderContent from './SliderContent'
import { sliderData } from '../../../../data/sliderData'
import './slider.css'
import styled from 'styled-components';


const len = sliderData.length - 1;

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ?
                0 : activeIndex + 1)
        }, 4000);

        return () => clearInterval(interval);
    }, [activeIndex])

    return (
        <SliderContainer>
            <SliderContent
                activeIndex={activeIndex} />
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1
                    ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len
                    ? 0 : activeIndex + 1)}
            />
            <Dots
                activeIndex={activeIndex}
                onClick={(activeIndex) => setActiveIndex(activeIndex)} />
        </SliderContainer>
    )
}

const SliderContainer = styled.div`

  height: 100vh;
  width: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
`

export default Slider
