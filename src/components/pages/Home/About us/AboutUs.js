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
                    <Title title='Бонитас' />
                    <p>
                        При нас може да се насладите на приятна обстановка и уют, наподобяващ домашния, защото идеята ни е да предложим на нашите клиенти необходимото внимание и уважение, за да се чувства всеки от тях като наш най-важен гост. За нас на първо място е грижата за клиента. Ето защо менюто е съобразено с най-разнообразни вкусове. Предлагаме богат избор на ястия от европейската и българската кухня. Така ние не предлагаме на гостите си просто храна, а им осигуряваме възможност да се насладят на прекрасния вкус на блюдата, приготвени от майстор-готвачи, съчетано с безупречно обслужване.
                        Ресторантът е подходящо място за организиране на семейни и фирмени тържества, рождени дни, бизнес срещи и романтични вечери. При нужда от допълнителна информация може да се свържете с нас.
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
    background: rgb(202, 202, 202,0.2);
    /* box-shadow: 1px 1px 1px 1px rgba(1,1,1,0.3); */

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
    /* p{
        width:90%;
    } */
}
`}
`

export default AboutUs
