import React, { useState } from 'react'
import { sliderData } from '../../../../data/sliderData'
import styled from 'styled-components';


const Dots = (props) => {
    const [data, setData] = useState(sliderData);

    return (
        <AllDots >
            {data.map((slide, index) => {
                return <span
                    key={index}
                    className={`${props.activeIndex === index ?
                        'dot active-dot' : 'dot'}`}
                    onClick={(event) => props.onClick((event.target.value = index))}
                >

                </span>
            })}

        </AllDots>
    )
}
const AllDots = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 90%;
  justify-content: center;
  z-index: 200;
  span{
    cursor: pointer;
  height: 1rem;
  width: 1rem;
  margin: 0 3px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: inline-block;
  }
`

export default Dots