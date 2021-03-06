import React from 'react'
import styled from 'styled-components'
import { setColor, setFont } from '../../styles'

const Title = ({ className, title, center, subtitel }) => {
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
    font-size:2.7rem;
   color: ${setColor.primaryColor};
  letter-spacing:2px;
 ${setFont.slanted};
}
p{
    padding:0 3rem;
    font-size:1.2rem;
}
`
export default Title;