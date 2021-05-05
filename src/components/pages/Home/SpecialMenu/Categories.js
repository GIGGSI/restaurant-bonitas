import React from 'react'
import styled from 'styled-components'
import { setColor } from '../../../../styles'

const Categories = ({ categories, filterItems }) => {

  return <BtnContainer>
    {categories.map((category, index) => {
      return <button
        key={index}
        className="filter-btn"
        type="button"
        onClick={() => filterItems(category)}>
        {category}
      </button>
    })}
  </BtnContainer>
}

const BtnContainer = styled.div`
  
  border: 1px solid white;
    border-radius: 4px;
    margin: 3rem 1.4rem;
    display: inline-block;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    background: #fff;
    padding: 12px 40px;
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 1px 1px rgba(1,1,1,0.3);

  .filter-btn {
  background: transparent;
  border-color: transparent;
  font-size: 1.4rem;
  /* text-transform: capitalize; */
  margin: 0 0.5rem;
  letter-spacing: 1px;
  padding: 12px 15px;
  color: ${setColor.primaryColor};
  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: 0.25rem;

    
  

  &:hover {
    /* background: ${setColor.primaryColor};
    color: ${setColor.mainWhite}; */
    /* -webkit-box-shadow:1px 1px 1px 1px rgba(1,1,1,0.3);
    box-shadow: 1px 1px 1px 1px rgba(1,1,1,0.3); */
    border-bottom:2px solid ${setColor.primaryColor};
   
  }
  }
`;

export default Categories
