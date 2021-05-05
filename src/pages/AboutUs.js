import React from 'react'
import SectionPages from '../components/Globals/SectionPages/SectionPages'
import TitlePages from '../components/Globals/TitlePages'
import slide3 from '../images/slide3.jpg'
import AboutUsSection from '../components/pages/Home/About us/AboutUs'

const AboutUs = () => {
    return <>
        <SectionPages img={slide3}>
            <TitlePages
                title="ИСТОРИЯТА НИ"
            // subtitel="+359 879 50 66 88"

            />

        </SectionPages>
        <AboutUsSection />
    </>
}

export default AboutUs
