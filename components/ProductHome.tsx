'use client'
import React, { useEffect, useState } from 'react';
import ProductCarousel from './ProductCarousel';
import getProducts, { ProductProps } from './ProductService';

const ProductHome: React.FC = () => {
    const [productData, setProductData] = useState<ProductProps | null>(null);

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