import React from 'react'
import styled from 'styled-components'
import { setColor, setFont } from '../../styles'

const TitlePages = ({ className, title, center, subtitel, icon }) => {
    return (
        <TitleWrapper>
            <h1>  {title}</h1>
            <p>{subtitel}</p>
           
        </TitleWrapper>

    )
}
const TitleWrapper = styled.div`
text-align:center; 
h1{
    font-size:3.3rem;
   color: ${setColor.primaryColor};
  letter-spacing:2px;
 ${setFont.slanted};
}
p{
    padding:0 3rem;
    font-size:1.5rem;
    color:#fff;
}
`
export default TitlePages;