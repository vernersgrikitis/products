import { API_URL } from '@/constants';
import Image from 'next/image';
import groceries from '../assets/groceries.jpg'
import Link from 'next/link';

interface ProductResponse {
    products: Array<{
      id: number;
      description: string;
    }>;
}

const SpecialOffer = async () => {

    try {

        const res = await fetch(API_URL, {cache: 'no-store'})
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const products: ProductResponse = await res.json();

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
                        <div className='mx-auto flex justify-center'>
                            <ul className='text-black text-sm absolute mx-auto justify-end md:top-10 md:right-10 p-5 bg-stone-100 borderRadius'>
                                <h1 className='sm:text-sm md:text-lg lg:text-xl xl:text-2xl px-3 py-3 text-white bg-lime-600 border-2 border-slate-300 rounded-2xl text-center' >
                                    <Link href='/'>
                                        Today special offer 
                                    </Link>
                                </h1>
                                { products.products.map((el: any) => 
                                    <p key={el.id} className='sm:text-xs md:text-xs lg:text-sm xl:text-xl'>
                                        {el.description}
                                    </p>
                                )}
                            </ul>
                        </div>
                    </div>

            </div>
            
        );
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default SpecialOffer;