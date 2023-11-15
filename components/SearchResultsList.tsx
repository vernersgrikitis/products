import SearchResult from "./SearchResult";

interface SearchResultsListProps {
  results: Array<{
    id: number;
    name: string;
  }>;
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({ results }) => {
  return (
    <div className='w-full text-white cursor-pointer flex flex-col rounded-xl mt-4 max-h-[300px] overflow-auto'>
      {results.map((result) => (
        <SearchResult result={result} key={result.id} />
      ))}
    </div>
  );
};

export default SearchResultsList;