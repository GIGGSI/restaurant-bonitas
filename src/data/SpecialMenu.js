import food1 from '../images/food1.jpg'
import soup from '../images/soup.jpg'
import tarator from '../images/tarator.jpg'
import salat1 from '../images/gal-1.jpg'
import salat2 from '../images/salat2.jpg'
import shnicel from '../images/shnicel.jpg'
import burger from '../images/burger.jpg'
import tiramisu from '../images/tiramisu.jpg'
import sufle from '../images/sufle.jpg'


const SpecialMenu = [
    {
        id: 1,
        title: 'Крем супа от броколи със синьо сирене',
        category: 'Супи',
        price: 3.90,
        img: soup,
        desc: `
        Ароматът на топла зеленчуковата крем супа от броколи гали сетивата и възбужда апетита.
        `,
    },
    {
        id: 2,
        title: 'Таратор',
        category: 'Супи',
        price: 2.90,
        img: tarator,
        desc: `
        Таратор в купичка, таратор в чаша, а даже и таратор в бутилка, има ли лято има и таратор!
        `,
    },
    {
        id: 3,
        title: 'Салата с бейби спанaк и нар',
        category: 'Салати',
        price: 6.99,
        img: salat1,
        desc: `Една по-разлинча, цветна и вкусна салата!

        `,
    },
    {
        id: 4,
        title: 'Домати, печени чушки, патладжани и сирене',
        category: 'Салати',
        price: 20.99,
        img: salat2,
        desc: `Лесна, бърза и здравословна салата с патладжан и още куп любими зеленчуци
        `,
    },
    {
        id: 5,
        title: 'Свински Томахоук с картофи',
        category: 'Основни',
        price: 22.99,
        img: food1,
        desc: `
        Приотвен на скара свински томахоук, поднесен с карофи.
        `,
    },
    {
        id: 6,
        title: 'Телешки шницел по виенски',
        category: 'Основни',
        price: 18.99,
        img: shnicel,
        desc: `Традиционен телешки шницел по виенски, поднесен с пържени картофи`,
    },
    {
        id: 7,
        title: 'Телешки бургер',
        category: 'Основни',
        price: 8.99,
        img: burger,
        desc: `Класически телешки бургер, с чедър и бекон`,
    },
    {
        id: 8,
        title: 'Тирамису',
        category: 'Десерти',
        price: 3.99,
        img: tiramisu,
        desc: `
        Истинско изкушение и истинско прегрешение. Но е пролет и можем да си позволим да се поглезим малко.        `,
    },
    {
        id: 9,
        title: 'Шоколадово суфле',
        category: 'Десерти',
        price: 3.99,
        img: sufle,
        desc: `
        Любителите на сладкото ще се влюбят в това наистина вълнуващо сетивата гурме приключение.
        `,
    },
];
export default SpecialMenu;
