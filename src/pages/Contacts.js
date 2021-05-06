import React from 'react'
import SectionPages from '../components/Globals/SectionPages/SectionPages'
import TitlePages from '../components/Globals/TitlePages'
import phone from '../images/phone.jpg'
import GoogleMaps from '../components/Contacts/Maps/GoogleMaps'
import styled from 'styled-components'
import { media, setColor } from '../styles'
import bonitas from '../images/bonitas.JPG'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'


const Contacts = () => {
    return <>
        <SectionPages img={phone}>
            <TitlePages
                title="ЗА ВРЪЗКА С НАС"
                subtitel="+359 879 50 66 88"
            />

        </SectionPages>
        <Wrapper>
            <InfoWrapper>
                <div>
                    <h4>Ще ни откриете на</h4>
                    <p>
                        <span><HiOutlineLocationMarker /> </span>  ул. „Рачо Петков Казанджията“ № 10 , 1756 Бистрица 1000 София.
                    </p>
                </div>

                <div>
                    <h4>Телефон</h4>
                    <p>
                        <span><AiOutlinePhone /> </span>   087 950 6688
                    </p>
                </div>
                <div className="about-img">
                    <img src={bonitas} alt="about us" />
                </div>
            </InfoWrapper>
            <GoogleMaps />

        </Wrapper>
    </>
}
const Wrapper = styled.div`
display:grid;
grid-template-columns:1fr ;
/* grid-gap:1rem; */

${media.tablet`
grid-template-columns:1fr 2fr;
height:35rem;
`}

`
const InfoWrapper = styled.div`
text-align:center;
padding:1rem;   
align-items:center;
justify-content:center;
/* height:35rem; */

h4 {
    padding-top:2rem;
}
.about-img {
    padding:1.8rem;
}
    .about-img {
        img {
            width:100%;
            display:block;
            box-shadow: -16px -16px 0px #d0a772;
            transition: all 0.2s linear;

            &:hover{
                box-shadow: -16px -16px 0px #d1c4b4;
                transform:scale(1.03); 
            }
        }
    }
div {
  p{
    &:hover{
        color:${setColor.primaryColor}
    }  
  }  
}
`

export default Contacts
