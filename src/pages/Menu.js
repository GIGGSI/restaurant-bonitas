import React, { useState } from 'react'
import SectionPages from '../components/Globals/SectionPages/SectionPages'
import menuPic from '../images/menuPic.jpg'
import TitlePages from '../components/Globals/TitlePages'
import Title from '../components/Globals/Title'

import items from '../data/FullMenu';
import Categories from '../components/pages/Home/SpecialMenu/Categories'
import Menus from '../components/pages/Home/SpecialMenu/Menu'
import styled from 'styled-components'


const allCategories = ['Всички', ...new Set(items.map((item) => item.category))]


const Menu = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'Всички') {
            setMenuItems(items);
            return;
        }
        const newItems = items
            .filter((item) => item.category === category);
        setMenuItems(newItems);
    }


    return <>
        <SectionPages img={menuPic}>
            <TitlePages
                title="КУЛИНАРНИ ИЗКУШЕНИЯ"
                subtitel="свежи продукти, вкусни ястия "
            />
        </SectionPages>
        <Wrapper>
            <Title
                title="Пролетни Бонитас предложения"
                subtitel="
            
Ресторант Бонитас следва своята традиция да предлага вкусни гозби приготвени с български продукти, повечето от които на местни бутикови ферми.
            "
            />
            <Categories
                categories={categories}
                filterItems={filterItems} />
            <Menus items={menuItems} />
        </Wrapper>

    </>
}

const Wrapper = styled.div`
text-align:center;
margin-top:5rem;

`

export default Menu
