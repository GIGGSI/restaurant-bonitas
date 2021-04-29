import React, { useState } from 'react'
import styled from 'styled-components'
import Section from '../../../Globals/Section'
import Title from '../../../Globals/Title'
import { galleryData } from '../../../../data/galleryData'
import { media, setBoxShadow, setTransition } from '../../../../styles'

const Gallery = () => {
    const [data, setData] = useState(galleryData)

    return <Section>
        <Title title="Галерия"
            subtitel="Lorem Ipsum is simply dummy text of the printing and typesetting"
        />
        <GalleryWrapper>

            {data.map((item) => {
                return <SingleImg key={item.id} >
                    <img src={item.img} alt="img" />
                </SingleImg>
            })}
        </GalleryWrapper>


    </Section>
}

const GalleryWrapper = styled.div`
width:95vw;
margin:0 auto;
display:grid;
grid-template-columns: 1fr ;
grid-gap:1.5rem 2rem;

${media.tablet`
grid-template-columns: 1fr 1fr;

`}
${media.desktop`
grid-template-columns: 1fr 1fr 1fr;

`}

`

const SingleImg = styled.div`

background:#222;
    -webkit-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.4); 
       box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.4);
       height:265px;

img{
    
    opacity:0.9;
    width:100%;
    height:265px;
    transition: all 0.2s linear;
    &:hover {
        opacity:1;
        transform:scale(1.03);
        -webkit-box-shadow: 5px 5px 5px 3px rgba(0,0,0,0.8); 
        box-shadow: 5px 5px 5px 3px rgba(0,0,0,0.8);
    }
}

`

export default Gallery
