import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ProductsContext = createContext();
const URIProducts = 'http://localhost:8000/products/';

const ProductsProvider = ({children}) => {

    const notifyError = () => toast.error('Ocurrió un error al cargar los datos', { id: 'loadingError', duration: 1000});

    useEffect(() => {
        getProducts();
    }, []);

    const [products, setProducts] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = async () => {
        try {
            const res = await axios.get(URIProducts);
            const productsData = res.data;
            const updatedProducts = productsData.map((product) => {
                return { ...product, quantity: 0 };
            });
            setProducts(updatedProducts);
            setIsLoading(false);
        } catch (error) {
            notifyError();
        }
    };

    

    return (
        <ProductsContext.Provider value={{ products, setProducts, isLoading, getProducts, URIProducts}}>
            {children}
            <Toaster/>
        </ProductsContext.Provider>
    );
};

export { ProductsContext, ProductsProvider };