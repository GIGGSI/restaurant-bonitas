import { css } from 'styled-components';
const defaultImg = 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'

export const setColor = {
    primaryColor: "#cd853f;",
    mainWhite: "#fff",
    mainBlack: '#222',
    mainGray: '#ececec',
    lightGray: '#f7f7f7'
}

export const setFont = {
    main: "font-family:'Montserrat'",
    slanted: "font-family:'Comfortaa'",
}


export const setFlex = ({ x = "center", y = "center" }) => {
    return `display:flex;align-items:${y};justify-content:${x}`
}

// set background image to our hero
export const setBackground = ({ img = `${defaultImg}`, color = "rgba(0,0,0,0.5)" } = {}) => {
    return ` background:linear-gradient(${color},${color}),
url(${img})
 center/cover fixed no-repeat;`
};

export const navBg = ({ color = "transparent" } = {}) => {
    return `background:${color}`
}


// set mobile size
const sizes = {
    large: 1200,
    desktop: 992,
    tablet: 768,
    phone: 576
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em){
        ${css(...args)}
    }
    `
    return acc
}, {});

