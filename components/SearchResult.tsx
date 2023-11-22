import Link from 'next/link';
import { Product } from '../services/ProductService';

interface SearchResultProps {
  product: Product;
}

const SearchResult: React.FC<SearchResultProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className='p-2 px-4 bg-lime-700 hover:bg-lime-300 transition-colors duration-300 block' passHref>
      <h1>{product.name}</h1>
      <p className='text-xs'>Price: {product.price} eur/kg</p>
      <p className='text-xs'>Category: {product.category}</p>
    </Link>
  );
};

export default SearchResult;