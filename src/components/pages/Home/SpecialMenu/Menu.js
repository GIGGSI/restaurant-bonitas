import React from 'react';
import styled from 'styled-components';
import { media, setColor, setTransition } from '../../../../styles';

const Menu = ({ items }) => {
  console.log(items)
  return <SectionCenter>
    {items.map((menuItem) => {
      const { id, title, img, desc, price } = menuItem;
      return <Card key={id}>
        <Image>
          <img src={img} alt={title} />
        </Image>
        <Details className="details">
          <Center>
            <h3>{title}</h3>
            <p>{desc}</p>
          </Center>
        </Details>
      </Card>
    })}
  </SectionCenter>
};

const SectionCenter = styled.div`
  width: 90vw;
   margin: 0 auto;
   max-width: 1170px;
   display: grid;
   gap: 1rem 0.5rem;
   justify-items: center;
   align-items: center;
   grid-template-columns: 1fr;

   ${media.tablet`
   grid-template-columns: 1fr 1fr;
  
   `}

 ${media.large`
    grid-template-columns: 1fr 1fr 1fr  ;
    } `} 

 `
const Card = styled.div`
transform: translate(0%, 0%);
  width: 360px;
  height:240px;
  transition: all 0.3s linear;
  -webkit-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.4); 
box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.4);
&:hover{
  -webkit-box-shadow: 5px 5px 5px 3px rgba(0,0,0,0.8); 
box-shadow: 5px 5px 5px 3px rgba(0,0,0,0.8);
}
&:hover .details {
  transform: perspective(2000px) rotateY(0deg);
 
}
border-radius: 0.8rem 0.8rem 0 0;
`
const Image = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.8rem 0.8rem 0 0;

  img {
    width: 100%;
  transition: 0.5s;
  &:hover {
    opacity: 0.5;
  transform: translateX(30%); /*100%*/
  }
  }
`
const Details = styled.div`
position: absolute;
  top: 0;
  left: 0;
  width: 70%; /*100%*/
  height: 240px;
  border-radius:0.8rem 0 0 0;
  background: rgb(202, 202, 202);
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
  &:hover {
    transform: perspective(2000px) rotateY(0deg);
  }
`
const Center = styled.div`
 /* padding: 20px; */
 text-align: center;
  background: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  h3 {
    color: ${setColor.primaryColor}
 
  }
  p{
    margin: 0.8rem 0;
     padding: 0;
  color: #262626;
  }
`

export default Menu;
