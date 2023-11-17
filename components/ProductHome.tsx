'use client'
import React, { useEffect, useState } from 'react';
import ProductCarousel from './ProductCarousel';
import getProducts from '@/app/fetchdata/getProducts';

interface ProductResponse {
  products: Array<{
    id: number;
    name: string;
    price: number;
    currency: string;
    category: string;
    description: string;
  }>;
}

const ProductHome: React.FC = () => {
  const [productData, setProductData] = useState<ProductResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProducts();
      setProductData(response);
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