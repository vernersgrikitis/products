import Link from 'next/link';
import { ProductProps } from './ProductService';

interface SearchResultProps {
  product: ProductProps['products'][0];
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