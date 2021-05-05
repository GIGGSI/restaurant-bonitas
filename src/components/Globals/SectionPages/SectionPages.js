import React from 'react';
import styled from 'styled-components';
import { setBackground, setFlex } from '../../../styles'

const SectionPages = styled.header`
min-height:80vh;
${props => setBackground({ img: props.img, color: "rgba(0,0,0,0.6)" })}
${setFlex({})}
`

export default SectionPages