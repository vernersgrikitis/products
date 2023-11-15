'use client'
import Searchbar from '@/components/Searchbar';
import SearchResultsList from '@/components/SearchResultsList';
import { useState } from 'react';

const Search = () => {

    const [results, setResults] = useState<any[]>([]);

    return (
        <div className='absolute z-50 w-[300px]'>
            <Searchbar setResults={setResults}/>
            <SearchResultsList results={results}/>
        </div>
    )
};

export default Search