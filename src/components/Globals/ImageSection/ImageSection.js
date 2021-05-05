import React from 'react'
import styled from 'styled-components';
import { setColor, setFont } from '../../../styles';


const ImageSectionWrapper = styled.section`
background: url(${props => props.img}) no-repeat;
  background-size: cover;
  padding: 10rem 0;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
  text-align:center;

  h2 {
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 3rem;
  padding:0 1rem;
  color: ${setColor.primaryColor};
  
 
  margin-bottom:2rem;
  ${setFont.slanted};
  /* -webkit-text-stroke: 1px black;
   text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000; */
}
`

const ImageSection = ({ img, title }) => {
    return <ImageSectionWrapper img={img} >
        <h2>
            {title}
        </h2>
    </ImageSectionWrapper>

}

export default ImageSection