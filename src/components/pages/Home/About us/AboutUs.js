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
                        Една от мисиите на ресторант Bonita's е да Ви връща назад във времето, когато хората по естествен начин са опитвали от всички вкусове и аромати на земята. Това в Bonitas го подчертават най-много със своя хляб, който правят абсолютно сами в пекарната към ресторанта.

                    </p>
                    <p>
                        Всяка сутрин в седем екипът на Bonita's Ви посреща по стара българска традиция с току-що изпечен ароматен хляб, приготвен с внимателно подбрани съставки, естествени закваски и много обич. Възможностите на ресторанта са подкрепени от професионално и модерно технологично оборудване, което им позволява да произвеждат вкусни закуски, хлябове, печива и сладкарски изделия.


                    </p>
                    <p>
                        Както хляба така и останалите предложения в ресторанта ще надминат Вашите очаквания.


                    </p>
                    <p>
                        Брускетите с прошуто ще се превърнат във Ваш ежедневен  навик, а ако обичате шишове, трябва непременно да опитате тези на Bonita's. В същото време за секунди можете и да се озовете на морето благодарение на прясната риба, която ресторантът предлага. Богатата винена листа на ресторанта допълнително ще допринесе за Вашето добро настроение.

                    </p>
                    <p>
                        Индивидуалната атмосфера на Bonita's може да накара всеки да се почувства специално и уютно, елегантно, интимно, изискано и красиво...
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
    p{
       text-align:left;
    }
}
`}
`

export default AboutUs
