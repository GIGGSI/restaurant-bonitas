import React from 'react'
import SectionPages from '../components/Globals/SectionPages/SectionPages'
import TitlePages from '../components/Globals/TitlePages'
import phone from '../images/phone.jpg'

const Contacts = () => {
    return <>
        <SectionPages img={phone}>
            <TitlePages
                title="ЗА ВРЪЗКА С НАС"
                subtitel="+359 879 50 66 88"

            />
           
        </SectionPages>
    </>
}

export default Contacts
