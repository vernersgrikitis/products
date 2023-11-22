'use client'
import Searchbar from '@/components/Searchbar';
import SearchResultsList from '@/components/SearchResultsList';
import { useState } from 'react';

const Search = () => {

    const [results, setResults] = useState<any[]>([]);
    const [input, setInput] = useState('');

    const handleEmptyInput = () => {
        setResults([]);
        setInput('');
    };

    const handleBlur = () => {
        setTimeout(() => {
          handleEmptyInput();
        }, 100);
    };

    return (
        <div onClick={handleEmptyInput} onBlur={handleBlur} className='absolute z-50 w-[300px]'>
            <Searchbar 
                input={input} 
                setInput={setInput} 
                setResults={setResults}
            />
            <SearchResultsList products={results}/>
        </div>
    )
};

export default Search