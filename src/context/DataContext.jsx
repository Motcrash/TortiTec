import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DataContext = createContext();
const URIProducts = 'http://localhost:8000/products';
const URISells = 'http://localhost:8000/sells';
const URIUsers = 'http://localhost:8000/users';

const DataProvider = ({children}) => {

    const [products, setProducts] = useState([{}]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [sells, setSells] = useState([{}]);
    const [sellsLoading, setSellsLoading] = useState(true);
    const [credential, setCredential] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (credential.id) {
            getProducts(credential.id);
            getSells(credential.id);
        }
    }, [credential]);

    const notifyError = () => toast.error('Ocurrió un error al cargar los datos', { id: 'loadingError', duration: 1000});  
    const notifyLoginError = () => toast.error('El usuario o contraseña son incorrectos', { id: 'loginError', duration: 1000});  

    const getProducts = async (user_id) => {
        try {
            const res = await axios.get(`${URIProducts}/${user_id}`);
            const productsData = res.data;
            const updatedProducts = productsData.map((product) => {
                return { ...product, quantity: 0 };
            });
            setProducts(updatedProducts);
            if (products) {
                setProductsLoading(false);
            }
        } catch (error) {
            notifyError();
        }
    };

    const getSells = async (user_id) => {
        try {
            const res = await axios.get(`${URISells}/${user_id}`);
            const sellsData = res.data;
            setSells(sellsData);
            if (sells) {
                setSellsLoading(false);
            }
        } catch (error) {
            notifyError();
        }
    };

    const getUser = async (user, password) => {
        try {
            const res = await axios.get(`${URIUsers}/${user}/${password}`);
            const usersData = res.data[0];
            setCredential(usersData);
            await getProducts(usersData.id);
            await getSells(usersData.id);
            navigate('/main');
        } catch (error) {
            notifyLoginError();
        }
    };
    

    const deleteData = () => {
        setCredential({});
        setProducts([{}]);
        setSells([{}]);
    }

    

    return (
        <DataContext.Provider value={{ 
            products, setProducts, productsLoading, getProducts, URIProducts,
            sells, setSells, sellsLoading, getSells, URISells, 
            getUser, credential, deleteData, URIUsers
        }}>
            {children}
            <Toaster/>
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };