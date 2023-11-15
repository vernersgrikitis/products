import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from './Product';

interface ProductCarouselProps {
  products: Array<{
    id: number;
    name: string;
    price: number;
    currency: string;
    category: string;
    description: string;
  }>;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {

  return (

    <Slider {...settings} className='mt-4 px-4'>
    {products.map((product) => (
        <div key={product.id} className='px-1'>
            <Product product={product}/>
        </div>
    ))}
    </Slider>
  );
};

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
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default ProductCarousel;