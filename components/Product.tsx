interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    currency: string;
    category: string;
    description: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="p-4 borderRadius bg-stone-100  shadow-md mx-auto h-40">
      <h3 className="text-black cursor-pointer md:hover:text-lime-600 text-lg ">{product.name}</h3>
      <p className="text-black">{product.description}</p>
      <p className="text-green-950">Price: {product.price}eur/kg</p>
    </div>
  );
};

export default Product;
