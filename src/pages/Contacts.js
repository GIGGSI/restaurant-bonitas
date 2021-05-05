import React from 'react'
import SectionPages from '../components/Globals/SectionPages/SectionPages'
import TitlePages from '../components/Globals/TitlePages'
import phone from '../images/phone.jpg'
import GoogleMaps from '../components/Contacts/Maps/GoogleMaps'
import styled from 'styled-components'
import { media } from '../styles'

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
                        ул. „Рачо Петков Казанджията“ № 10 , 1756 Бистрица 1000 София.
                    </p>
                </div>

                <div>
                    <h4>Телефон</h4>
                    <p>
                        087 950 6688
                    </p>
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

`

export default Contacts
