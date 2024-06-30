import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const SellsContext = createContext();
const URISells = 'http://localhost:8000/sells/';

const SellsProvider = ({children}) => {

    const notifyError = () => toast.error('Ocurrió un error al cargar los datos', { id: 'loadingError', duration: 1000});

    useEffect(() => {
        getSells();
    }, []);

    const [sells, setSells] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getSells = async () => {
        try {
            const res = await axios.get(URISells);
            const sellsData = res.data;
            setSells(sellsData);
            setIsLoading(false);
        } catch (error) {
            notifyError();
        }
    };

    

    return (
        <SellsContext.Provider value={{ sells, setSells, isLoading, getSells, URISells }}>
            {children}
            <Toaster/>
        </SellsContext.Provider>
    );
};

export { SellsContext, SellsProvider };