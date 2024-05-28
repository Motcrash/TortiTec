import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isAuthenticated}) => {
    return isAuthenticated ? (
        element
    ) : (
        <Navigate to={'/'} replace/>
    );
};

export default ProtectedRoute;