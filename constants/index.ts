import apples from '../assets/apples.jpg';
import bread from '../assets/bread.jpg';
import salmon from '../assets/salmon.jpg';
import meat from '../assets/meat.jpg';
import bgImage from '../assets/bg.jpg';
import openMenu from '../assets/burger.svg'
import closeMenu from '../assets/close.svg'
import rightClick from '../assets/right-click.svg';
import leftClick from '../assets/left-click.svg';

export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/products', key: 'products', label: 'Products' },
];

export const API_URL = 'https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd';

export const HERO_IMAGES = [
    { src: apples, text: 'Fresh and Delicious Apples', href: '/products' },
    { src: bread, text: 'Artisanal Whole Grain Bread', href: '/products' },
    { src: salmon, text: 'Fresh Atlantic Salmon Fillet', href: '/products' },
    { src: meat, text: 'Juicy and Flavorful Meat', href: '/products' },
];

export const BACKGROUND_CONFIG = {
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center',
    justifyContent: 'center',
};

export const BURGER_MENU = {
    openMenu, closeMenu
};

export const PAGINATION_ARROWS = {
    leftClick, rightClick
}

export { default as Hero } from '../components/Hero';
export { default as ProductHome } from '../components/ProductHome';
export { default as SpecialOffer } from '../components/SpecialOffer';