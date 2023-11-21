import Searchbar from '@/components/Searchbar';
import SearchResultsList from '@/components/SearchResultsList';

type SearchProps = {
    input: string;
    setInput: (value: string) => void;
    results: Array<{
        id: number;
        name: string;
        price: number; 
        category: string; 
    }>;
    setResults: (results: Array<{}>) => void;
};

const Search: React.FC<SearchProps> = ({ input, setInput, results, setResults }) => {

    const handleInputClick = () => {
        setInput("");
        setResults([]);
    };

    return (
        <div onClick={handleInputClick} className='absolute z-50 w-[300px]'>
            <Searchbar 
                input={input} 
                setInput={setInput} 
                setResults={setResults}
            />
            <SearchResultsList results={results}/>
        </div>
    )
};

export default Search