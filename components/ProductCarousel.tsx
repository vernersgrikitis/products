import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductData } from '../services/ProductService';

const ProductCarousel: React.FC<ProductData> = ({ products }) => {

  return (
    <div>
      <Slider {...settings} className='mt-4 px-4'>
        {products.map((product) => (
          <div key={product.id} className='px-1'>
            <div className='p-4 borderRadius bg-stone-100 shadow-md mx-auto h-40'>
              <Link href={`http://localhost:3000/products/${product.id}`} 
                className='text-black cursor-pointer md:hover:text-lime-600 text-lg'
              >
                {product.name}
              </Link>
              <p className='text-black'>{product.description}</p>
              <p className='text-green-950'>Price: {product.price}eur/kg</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: { dots: false, slidesToShow: 3, slidesToScroll: 2 }
    },
    {
      breakpoint: 600,
      settings: { arrows: false, slidesToShow: 2, slidesToScroll: 1 }
    },
    {
      breakpoint: 480,
      settings: { arrows: false, slidesToShow: 1, slidesToScroll: 1 }
    }
  ]
};