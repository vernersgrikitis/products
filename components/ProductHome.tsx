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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {cache: 'no-store'});
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

  return (
    <div className="container mx-auto">
      {productData && <ProductCarousel products={productData.products} />}
    </div>
  );
};

export default ProductHome;
