'use client'
import React, { useState, useEffect } from 'react';
import { API_URL } from '@/constants';
import Link from 'next/link';
import rightClick from '@/assets/right-click.svg';
import leftClick from '@/assets/left-click.svg';
import PaginationButton from '@/components/PaginationButton';

interface ProductResponse {
  products: Array<{
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
  }>;
}

const page: React.FC = () => {
  const [products, setProducts] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData: ProductResponse = await response.json();
        setProducts(jsonData);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const paginatedProducts = (page: number) => {
    if (!products) {
      return [];
    }

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.products.slice(startIndex, endIndex);
  };

  const totalPages = products ? Math.ceil(products.products.length / productsPerPage) : 0;

  return (
    <div className='autoFlexJustify padding-X padding-Y products-text'>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className='flex-col w-[345px] sm:w-[470px] md:w-[700px] h-full'>
          <div>
            {paginatedProducts(currentPage).map((product) => (
              <div key={product.id} className='mt-5 text-black p-4 bg-stone-100 borderRadius'>
                <Link href={`/products/${product.id}`}>
                  <h2 className='borderRadius products-text px-3 py-3 bg-lime-600'>
                    {product.name}
                  </h2>
                </Link>
                <p>Price: {product.price} eur/kg</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
              </div>
            ))}
          </div>
          <div className='flex py-5 px-5'>
            <div>
              <PaginationButton 
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                imageSrc={leftClick}
                imageAlt='left click'
                imageSize={{ width: 40, height: 40 }}
                classNameForImage='bg-lime-600 borderRadius cursor-pointer'
              />
            </div>
            <div className='autoFlexJustify text-white '>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationButton 
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`${currentPage === index + 1 ? 
                  'borderRadius bg-white px-2 py-2 mx-1' 
                  : 
                  ' bg-lime-600 borderRadius px-2 py-2 mx-1'}`}
                />
              ))}
            </div>
            <div>
              <PaginationButton 
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                imageSrc={rightClick}
                imageAlt='right click'
                imageSize={{ width: 40, height: 40 }}
                classNameForImage='bg-lime-600 borderRadius cursor-pointer'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;