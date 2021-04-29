import React from 'react'
import styled from 'styled-components';
import Section from '../Globals/Section';
import img1 from '../../images/gal-5.jpg'
import { media, setBackground } from '../../styles';
import { Link } from 'react-router-dom';
import { setColor } from '../../styles';
import { AiOutlineClockCircle, AiOutlinePhone } from 'react-icons/ai'
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { HiOutlineLocationMarker } from 'react-icons/hi'


const Footer = () => {
    return <Section>
        <ImageWrapper>
            <Wrapper>
                <Row>
                    <Column>
                        <Title>Бонитас</Title>
                        <Paragrapht>
                            При нас ще откриете прекрасна храна и уют.
                        </Paragrapht>
                    </Column>
                    <Column>
                        <Title>Работно Време</Title>
                        <Paragrapht> <AiOutlineClockCircle /> Всеки ден от 10:30 до 23:30</Paragrapht>

                    </Column>
                    <Column>
                        <Title>За резервации</Title>
                        <Paragrapht> <AiOutlinePhone /> 087 950 6688</Paragrapht>
                        <Paragrapht> <HiOutlineLocationMarker /> ул. „Рачо Петков Казанджията“ № 10 , 1756 Бистрица 1000 Sofia</Paragrapht>

                    </Column>
                    <Column>
                        <Title>Намерете ни!</Title>
                        <AncorTag href="https://www.facebook.com/bonitassofia/" target="_blank" ><SiFacebook /> Бонитас</AncorTag>
                        <AncorTag href="https://www.instagram.com/bonitassofia/" target="_blank" ><SiInstagram /> Бонитас</AncorTag>

                    </Column>

                </Row>
            </Wrapper>
        </ImageWrapper>
    </Section>
}

const ImageWrapper = styled.div`

${props => setBackground({ img: img1, color: "rgba(0,0,0,0.7)" })}
  padding: 3rem 0;
  text-align:center;

`

const Wrapper = styled.div`
display:flex;

flex-direction:column;
justify-content:center;
max-width:1170px;
margin:0 auto;
`

const Column = styled.div`
display:flex;
flex-direction:column;
text-align:left;
padding:1rem;
/* margin-left:60px; */

background: rgba(1,1,1,0.4);


`
const Row = styled.div`

display:grid;
grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
grid-gap:10px;

${media.tablet`

grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
`}
`
const Links = styled(Link)`

color:${setColor.mainWhite};
margin-bottom:10px;
font-size:1.2rem;
text-decoration:none;

&:hover {
    color:${setColor.primaryColor};
    transition:200ms ease-in;
}
`;

const Title = styled.h3`
font-size:1.7rem;
color:${setColor.mainWhite};
`

const Paragrapht = styled.p`
color:${setColor.mainWhite};

`

const AncorTag = styled.a`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  margin-bottom:10px;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`

export default Footer
