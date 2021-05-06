import React from 'react';
import Slider from '../components/pages/Home/Carousel/Slider';
import AboutUs from '../components/pages/Home/About us/AboutUs'
import ImageSection from '../components/Globals/ImageSection/ImageSection';
import MenuItems from '../components/pages/Home/SpecialMenu/MenuItems'
import Gallery from '../components/pages/Home/Gallery/Gallery'

import img1 from '../images/slide3.jpg'
import items from '../data/SpecialMenu'

const allCategories = ['Всички', ...new Set(items.map((item) => item.category))]


const Home = () => {
    return <>
        <Slider />
        <AboutUs />
        <ImageSection img={img1} title="Животът е комбинация от магия и паста." />
        <MenuItems allCategories={allCategories} items={items} />
        <Gallery />
    </>
}

export default Home
