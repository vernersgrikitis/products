'use client'
import React, { useEffect, useState } from 'react';
import ProductCarousel from './ProductCarousel';
import { ProductService, ProductProps } from '../services/ProductService';

const ProductHome: React.FC = () => {
    const [productData, setProductData] = useState<ProductProps | null>(null);

    const productService = new ProductService;

    useEffect(() => {
        const fetchData = async () => {
            const response = await productService.getProducts();
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