import { ProductService, Product } from '../services/ProductService';

type SearchbarProps = {
  input: string;
  setInput: (value: string) => void;
  setResults: (results: Product[]) => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ input, setInput, setResults }) => {

  const productService = new ProductService();

  const handleChange = async (value: string) => {
    setInput(value);
    const products = await productService.fetchData(value);
    setResults(products.products);
  }

  const handleInputClick = () => {
    setInput("");
    setResults([]);
  };

  return (
    <div className='relative'>
      <input
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onClick={handleInputClick}
        placeholder='Search for products...' 
        className='text-white borderRadiusFull shadow-md h-10 w-full bg-lime-600 p-4 focus:outline-none placeholder-white'
      />
    </div>
  )
};

export default Searchbar;