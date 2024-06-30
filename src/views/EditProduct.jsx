import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { ProductsContext } from "../context/ProductsContext";
import "../styles/addProductStyle.css";
import HeaderComponent from "../components/HeaderComponent";
import NavBarComponent from "../components/NavBarComponent";
import LoaderComponent from "../components/LoaderComponent";

const notifyCreate = () => toast.success("Producto editado exitosamente", { id: "created", duration: 1000 });
const notifyCancel = () => toast.success("Modificaciones canceladas", { id: "canceled", duration: 1000 });
const notifyError = () => toast.error("Oucrrió un error al cargar los datos", { id: "dataError", duration: 1000 });

const EditProduct = () => {
  const { products, getProducts, isLoading, URIProducts } = useContext(ProductsContext);

  useEffect(() => {
    if (!isLoading) {
      getProduct();
    }
  }, [isLoading]);


  let { state } = useLocation();
  const { id } = state;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  const getProduct = async () => {
    try {
      const product = products.find((product) => product.id == id);
      setName(product.title);
      setPrice(product.price);
      setDescription(product.description);
      setQuantity(product.stock);
      setImage(product.image);
    } catch (error) {
      notifyError();
    }
  };

  const handleProductNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleQuantityChange = (e) => {
    const value = Math.floor(e.target.value);
    value === 0 ? setQuantity("") : setQuantity(value);
  };

  const handleImageChange = (e) => {
    const imageData = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (f) {
      const imageUri = f.target.result;
      setImage(imageUri);
    };
    reader.readAsDataURL(imageData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URIProducts}${id}`, {
        title: name,
        description: description,
        price: price,
        stock: quantity,
        image: image,
      });
      getProducts();
      notifyCreate();
    } catch {
      notifyError();
    }
  };

  const cancelEdit = () => {
    notifyCancel();
    getProduct();
  };

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div>
          <HeaderComponent />
          <NavBarComponent />
          <div className="product-form-container">
            <h2>Edite los datos del producto</h2>
            <img src={image} alt="imagen" draggable="false" />

            <form onSubmit={handleSubmit} className="product-form">
              <div className="form-group">
                <label htmlFor="productName">Nombre del Producto:</label>
                <input
                  placeholder="Ingrese el nombre del producto"
                  type="text"
                  id="productName"
                  value={name}
                  onChange={handleProductNameChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Precio:</label>
                <input
                  placeholder="Ingrese el precio del producto"
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
                  placeholder="Escriba aquí una descripción (opcional)"
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Cantidad:</label>
                <input
                  placeholder="Ingrese la existencia del producto (opcional)"
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
              <button type="submit">Guardar Producto</button>
            </form>
            <button className="cancelButton" onClick={cancelEdit}>
              Cancelar
            </button>
            <Toaster />
          </div>
        </div>
      )}
    </>
  );
};

export default EditProduct;
