import {API_URL} from "@/constants";

export interface ProductData {
    products: Product[];
}
  
export interface Product {
    id: number;
    name: string;
    price: number;
    currency: string;
    category: string;
    description: string;
}

export class ProductService {

    async fetchData(value: string): Promise<ProductData> {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const json: ProductData = await response.json();
            const filteredProducts = json.products.filter((product) => {
                return (value && product && product.name
                    && product.name.toLowerCase().includes(value)
                );
            });
            const filteredProductProps: ProductData = {
                products: filteredProducts,
            };
            return filteredProductProps;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    async getProducts() {
        const response = await fetch(API_URL);
    
        if(!response.ok) {
            throw new Error(`failed fetch products from ${API_URL}`);
        }
    
        return await response.json();
    }
}
