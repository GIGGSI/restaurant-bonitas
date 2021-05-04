import React, { useState } from 'react'
import Section from '../../../Globals/Section'
import Title from '../../../Globals/Title'
import Categories from './Categories'
// import items from '../../../../data/SpecialMenu'
import Menu from './Menu'

// const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const MenuItems = ({ items, allCategories }) => {
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

    return <Section>
        <Title
            title="Акценти от менюто"
            subtitel="Опитайте нашите специални предложения за тази седмица!"
        />
        <Categories
            categories={categories}
            filterItems={filterItems} />
        <Menu items={menuItems} />

    </Section>
}

export default MenuItems
