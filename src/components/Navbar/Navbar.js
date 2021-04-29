import React, { useState } from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { menuData } from '../../data/menuData'
import './Navbar.css'
import logo from '../../images/logo.png'


const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding: 0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;

`
const Logo = styled(Link)`
${NavLink}
font-style:italic;
color:white;
img {
    width:10rem;
}

`

const MenuBars = styled(FaBars)`
display:none;

@media screen and (max-width:768px){
display:block;
color:white;
font-size:2.5rem;
margin-top:1rem;
cursor:pointer;
position:absolute;
top:0;
right:0;
transform:translate(-50%,25%)
}
`;

const NavMenu = styled.div`
display:flex;
align-items:center;
/* margin-right:-48px; */


@media screen and (max-width:768px) {
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
text-transform:uppercase;
padding-bottom:10px;

/* margin:1rem 0; */
&:hover {
    border-bottom:1px solid white;
}

`


const Navbar = ({ toggle, className }) => {
    const [navbar, setNavbar] = useState(false);
    const [data, setData] = useState(menuData)


    const changeBackground = () => {
        if (window.scrollY >= 530) {
            setNavbar(true)

        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return <nav className={navbar ? 'active-nav' : null}>
        <Logo to="/"><img src={logo} alt="logo bonitas" /></Logo>
        <MenuBars onClick={toggle} />
        <NavMenu >
            {data.map((item) => {
                return <NavMenuLinks
                    to={item.link}
                    key={item.id}>
                    {item.title}
                </NavMenuLinks>
            })}
        </NavMenu>

    </nav >
}

export default Navbar
