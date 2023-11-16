'use client'
import React, { useEffect, useState } from 'react';
import ProductCarousel from './ProductCarousel';
import { API_URL } from "@/constants";

interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  category: string;
  description: string;
}

interface ProductResponse {
  products: Product[];
}

const ProductHome: React.FC = () => {
  const [productData, setProductData] = useState<ProductResponse | null>(null);
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData: ProductResponse = await response.json();
        setProductData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const totalProducts = productData?.products.length || 0;
  const totalPages = Math.ceil(totalProducts / pageSize);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container mx-auto">
      {productData && (
        <ProductCarousel
          products={productData.products.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default ProductHome;
