import SearchResult from './SearchResult';
import { ProductData } from '../services/ProductService';

const SearchResultsList: React.FC<ProductData> = ({ products }) => {
  return (
    <div className='w-full text-white cursor-pointer flex flex-col rounded-xl mt-4 max-h-[300px] overflow-auto'>
      {products.map((product) => (
        <SearchResult product={product} key={product.id} />
      ))}
    </div>
  );
};

export default SearchResultsList;