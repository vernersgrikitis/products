import getProducts from '@/app/fetchdata/getProducts';

interface ProductResponse {
    products: Array<{
      id: number;
      name: string;
      price: number;
      category: string;
      description: string;
    }>;
}

const page = async (
    { params } : 
    { params: { id: string }}) => {

    const products: ProductResponse = await getProducts();
    const parsedId = parseInt(params.id)

    return (
        <div className='autoFlexJustify padding-X padding-Y w-[345px] sm:w-[470px] md:w-[700px] h-full products-text'>
            { products.products
                .filter((product) => product.id === parsedId)
                .map((correctProduct) => (
                <div key={correctProduct.id} className='text-black p-4 bg-stone-100 borderRadius padding-X'>
                    <h1 className='borderRadius products-text px-3 py-3 bg-lime-600'>
                        {correctProduct.name}
                    </h1>
                    <p>Price: {correctProduct.price}</p>
                    <p>Category: {correctProduct.category}</p>
                    <p>Description: {correctProduct.description}</p>
                </div>
            ))}
        </div>
    )
}

export default page