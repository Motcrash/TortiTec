import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

import '../styles/addProductStyle.css'
import noFotoImg from '../assets/img/no-fotos.png';
import HeaderComponent from '../components/HeaderComponent';
import NavBarComponent from '../components/NavBarComponent';

import noImage from '../assets/img/default-image.png';
import { ProductsContext } from '../context/ProductsContext';

const notifyCreate = () => toast.success('Producto creado exitosamente', { id: 'created', duration: 1000});
const notifyCancel = () => toast.success('Producto cancelado', { id: 'canceled', duration: 1000});
const notifyError = () => toast.error('No se ha podido crear el producto', { id: 'createError', duration: 1000});

const AddProduct = () => {

  const {URIProducts, getProducts} = useContext( ProductsContext );

  useEffect(() => {
    convertDefaultImageTo64();
  }, []);

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [defaultImage, setDefaultImage] = useState(null);
  const [image, setImage] = useState(null);

  const convertDefaultImageTo64 = async () => {
    try {
      const response = await fetch(noImage);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        setDefaultImage(reader.result);
      }
      reader.readAsDataURL(blob);
    } catch {
      notifyError();
    }
  }

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleQuantityChange = (e) => {
    const value = Math.floor(e.target.value);
    (value === 0) ? setQuantity('') : setQuantity(value);
  };

  const handleImageChange =  (e) => {
    const imageData = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (f) {
      const imageUri = f.target.result;
      setImage(imageUri);
    }
    reader.readAsDataURL(imageData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${URIProducts}`, {
        title: productName,
        description: description,
        price: price,
        stock: quantity,
        image: (image === null || image == noFotoImg) ? defaultImage : image,
      });
      getProducts();
      notifyCreate();
      clearProduct();
    } catch {
      notifyError();
      return;
    }

  };

  const clearProduct = () => {
    setImage(noFotoImg);
    document.getElementById('image').value = '';
    setProductName('');
    setPrice('');
    setQuantity('');
    setDescription('');
  }

  const cancelSale = () => {
    notifyCancel();
    clearProduct();
  }

  return (
    <>
        <HeaderComponent/>
        <NavBarComponent/>
        <div className="product-form-container">
            <h2>Ingrese los datos del producto</h2>
            {
                (!image) ? <img src={noFotoImg} alt="imagen" draggable="false"/> : <img src={image} alt="imagen" draggable="false"/>
            }
            <form onSubmit={handleSubmit} className="product-form">
                <div className="form-group">
                <label htmlFor="productName">Nombre del Producto:</label>
                <input
                    placeholder='Ingrese el nombre del producto'
                    type="text"
                    id="productName"
                    value={productName}
                    onChange={handleProductNameChange}
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="price">Precio:</label>
                <input
                    placeholder='Ingrese el precio del producto'
                    type="number"
                    id="price"
                    value={price}
                    onChange={handlePriceChange}
                    required
                    />
                </div>

                <div className="form-group">
                <label htmlFor="description">Descripción:</label>
                <textarea 
                  placeholder='Escriba aquí una descripción (opcional)' 
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">Cantidad:</label>
                  <input
                      placeholder='Ingrese la existencia del producto (opcional)'
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={handleQuantityChange}
                      required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image">Imagen:</label>
                  <input
                      
                      type="file"
                      id="image"
                      onChange={handleImageChange}
                      accept="image/*"
                  />
                </div>
                <button type="submit">Agregar producto</button>
            </form>
                <button className='cancelButton' onClick={cancelSale}>Cancelar</button>
            <Toaster />
            </div>
    </>
  );
};

export default AddProduct;
