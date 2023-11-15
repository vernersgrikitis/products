'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HERO_IMAGES } from '../constants/index'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {

  return (
      <div>
        <Slider {...settings}>
          {HERO_IMAGES.map((image, index) => (
            <Link key={index} href={image.href}>
              <div className="relative border-2">
                  <Image
                      src={image.src}
                      alt={`Slide ${index + 1}`}
                      className='w-full'
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                      <h1 className='text-white sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl text-justify border-2 border-white px-2'>{image.text}</h1>
                  </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
  );
};


export const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  customPaging: (i: number) => (
      <div 
          className={`w-2 h-2 rounded-full bg-white border-2 border-slate-100 mx-auto flex mt-[-30px] cursor-pointer`}
      />
  ),
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
      }
    }
  ]
};

export default Hero;