import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import '../styles/loaderStyle.css'


function LoaderComponent() {

  return (
    <div className="loaderContainer">
      <ClipLoader
        color={"#0056b3"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoaderComponent;