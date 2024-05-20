import React, { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import '../styles/loaderStyle.css'


function LoaderComponent() {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#0056b3");

  return (
    <div className="loaderContainer">
      <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoaderComponent;