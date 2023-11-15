import apples from '../assets/apples.jpg';
import bread from '../assets/bread.jpg';
import salmon from '../assets/salmon.jpg';
import meat from '../assets/meat.jpg';
import bgImage from "../assets/bg.jpg";

export const NAV_LINKS = [

    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'about', label: 'About Us' },
    { href: '/', key: 'products', label: 'Products' },
    { href: '/', key: 'contact', label: 'Contact Us' },
];

export const API_URL = 'https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd';

export const HERO_IMAGES = [
    { src: apples, text: 'Fresh and Delicious Apples', href: '/' },
    { src: bread, text: 'Artisanal Whole Grain Bread', href: '/' },
    { src: salmon, text: 'Fresh Atlantic Salmon Fillet', href: '/' },
    { src: meat, text: 'Juicy and Flavorful Meat', href: '/' },
];

export const BACKGROUND_CONFIG = {
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center',
    justifyContent: 'center',
};

export { default as Hero } from '../components/Hero';
export { default as ProductHome } from '../components/ProductHome';
export { default as SpecialOffer } from '../components/SpecialOffer';
export { default as AboutUs } from '../components/AboutUs';