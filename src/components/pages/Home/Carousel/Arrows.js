import React from 'react'
import styled from 'styled-components';

const Arrows = (props) => {
    return (
        <div className="arrows">
            <span className="prev"
                onClick={props.prevSlide}>
                &#10094;
            </span>
            <span className="next"
                onClick={props.nextSlide}>
                &#10095;
            </span>
        </div>
    )
}
const ArrowsSection = styled.div``;


export default Arrows
