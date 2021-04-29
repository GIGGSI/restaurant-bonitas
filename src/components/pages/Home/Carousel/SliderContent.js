import React, { useState } from 'react'
import { sliderData } from '../../../../data/sliderData'
import styled from 'styled-components';
import { setColor } from '../../../../styles'


const SliderContent = (props) => {
    const [data, setData] = useState(sliderData);

    return <Section>
        {data.map((slide, index) => {
            return <div
                key={index}
                className={index === props.activeIndex ?
                    'slides active' : 'inactive'}>
                <img src={slide.url} alt={slide.title} />
                <h1>{slide.title} </h1>
                <p> {slide.description} </p>
            </div>
        })}
    </Section>
}
const Section = styled.section`
color:${setColor.mainWhite};

img {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
h1{
    width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  font-size:5rem;
  top: 50%;
  z-index: 9;
}

p {

 width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  z-index: 9;
  top: 70%;
  font-size:2rem;
}

`


export default SliderContent
