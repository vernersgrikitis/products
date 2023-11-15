import Link from "next/link";

interface SearchResultProps {
  result: {
    id: number;
    name: string;
  };
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <Link href={`/product/${result.id}`} className='p-2 px-4 bg-lime-700 hover:bg-lime-300 transition-colors duration-300 block' passHref>
      {result.name}
    </Link>
  );
}

export default SearchResult;