import getProducts from './ProductService';
import Image from 'next/image';
import groceries from '../assets/groceries.jpg'
import Link from 'next/link';
import { ProductProps } from './ProductService';

const SpecialOffer = async () => {

    const products: ProductProps = await getProducts();

    return (
        <div className='relative mx-auto justify-center pt-5 flex padding-X'>
            <div className='hidden md:block'>
                <Image 
                    src={groceries} 
                    alt='groceries image' 
                    className='borderRadius object-cover w-full'
                />
            </div>
            <div className='h-screen'>
                <div className='autoFlexJustify'>
                    <div className='text-black text-sm absolute mx-auto justify-end md:top-10 md:right-10 p-5 bg-stone-100 borderRadius'>
                        <h1 className='products-text px-3 py-3  bg-lime-600 borderRadius text-center' >
                            <Link href='/products'>
                                Today special offer 
                            </Link>
                        </h1>
                        { products.products.map((el: any) => 
                            <p key={el.id} className='sm:text-xs md:text-xs lg:text-sm xl:text-xl'>
                                {el.description}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div> 
    );
    
};

export default SpecialOffer;