'use client'
import { API_URL } from "@/constants";
import { useState } from 'react';

interface ProductResponse {
  products: Array<{ 
    id: number; 
    name: string; 
    price: number; 
    currency: string; 
    category: string; 
    description: string;
  }>
}

type SearchbarProps = {
  setResults: (results: Array<{}>) => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ setResults }) => {

  const [input, setInput] = useState("");

  const fetchData = (value: string) => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json: ProductResponse) => {
        const results = json.products.filter((product) => {
          return (
            value &&
            product &&
            product.name &&
            product.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  
  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  }

  return (
    <div className='relative'>
        <input
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          placeholder='Serach for products...' 
          className='text-white rounded-full shadow-md border-2 border-slate-300 h-10 w-full bg-lime-600 p-4 focus:outline-none placeholder-white'         
        />
    </div>
  )
};

export default Searchbar