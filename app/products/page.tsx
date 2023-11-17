'use client'
import React, { useState, useEffect } from 'react';
import { API_URL } from "@/constants";
import Link from 'next/link';

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
    <div className='autoFlexJustify padding-X padding-Y'>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className='flex-col '>
          <div className=''>
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
          <div className='autoFlexJustify '>
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span> Page {currentPage} of {totalPages} </span>
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;