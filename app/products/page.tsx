'use client'
import React, { useState, useEffect } from 'react';
import { PAGINATION_ARROWS } from '@/constants';
import Link from 'next/link';
import PaginationButton from '@/components/PaginationButton';
import { ProductService, ProductProps } from '@/services/ProductService';

const page: React.FC = () => {
  const [products, setProducts] = useState<ProductProps | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 4;

  const productService = new ProductService;

  const handleProducts = async () => {
    try {
      const fetchedProducts = await productService.getProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    handleProducts();
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
              imageSrc={PAGINATION_ARROWS.leftClick}
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
              imageSrc={PAGINATION_ARROWS.rightClick}
              imageAlt='right click'
              imageSize={{ width: 40, height: 40 }}
              classNameForImage='bg-lime-600 borderRadius cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;