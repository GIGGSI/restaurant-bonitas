import React from 'react'
import Title from '../../../Globals/Title'
import styled from 'styled-components'
import aboutImg from '../../../../images/aboutImg.jpg'
import Section from '../../../Globals/Section'
import { media } from '../../../../styles'

const AboutUs = () => {
    return (
        <Section>
            <AboutCenter>
                <div className="about-img">
                    <img src={aboutImg} alt="about us" />
                </div>
                <div className="about-info">
                    <Title title='about us' />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </p>
                </div>

            </AboutCenter>

        </Section>
    )
}

const AboutCenter = styled.div`
padding-bottom:2rem;
.about-img, .about-info {
    padding:1.8rem;
}
    .about-img {
        img {
            width:100%;
            display:block;
            box-shadow: -16px -16px 0px #d0a772;
        }
    }
.about-info {
    p{
        letter-spacing:3px;
    }
}
width:90vw;
margin:0 auto;

${media.desktop`

width:100vw;
max-width:1170px;
display:grid;
grid-template-columns:1fr 1fr;
grid-column-gap:2rem;
.about-img {
    align-self:center;
}
.about-info {
    p{
        width:80%;
    }
}
`}
`

export default AboutUs
