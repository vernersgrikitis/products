import { API_URL } from '@/constants';

export default async function getProducts() {
    const response = await fetch(API_URL);

    if(!response.ok) {
        throw new Error(`failed fetch products from ${API_URL}`);
    }

    return await response.json();
}

