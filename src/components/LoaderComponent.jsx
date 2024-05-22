import React, { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import '../styles/loaderStyle.css'


function LoaderComponent() {

    let [loading, setLoading] = useState(true);

  return (
    <div className="loaderContainer">
      <ClipLoader
        color={"#0056b3"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoaderComponent;