'use client'
import Searchbar from '@/components/Searchbar';
import SearchResultsList from '@/components/SearchResultsList';
import { useState } from 'react';

const Search = () => {

    const [input, setInput] = useState("");
    const [results, setResults] = useState<any[]>([]);

    const handleEmptyList = () => {
        setResults([]);
        setInput('');
    };

    return (
        <div onClick={handleEmptyList} className='absolute z-50 w-[300px]'>
            <Searchbar input={input} setInput={setInput} setResults={setResults}/>
            <SearchResultsList results={results}/>
        </div>
    )
};

export default Search