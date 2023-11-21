import Link from 'next/link';

interface SearchResultProps {
  result: {
    id: number;
    name: string;
    price: number; 
    category: string; 
  };
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <Link href={`/products/${result.id}`} 
      className='p-2 px-4 bg-lime-700 hover:bg-lime-300 transition-colors duration-300 block' passHref>
      <h1>{result.name}</h1>
      <p className='text-xs'>Price: {result.price} eur/kg</p>
      <p className='text-xs'>Category: {result.category}</p>
    </Link>
  );
}

export default SearchResult;