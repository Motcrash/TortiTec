import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isAuthenticated}) => {
    return isAuthenticated ? (
        element
    ) : (
        <Navigate to={'/'} replace/>
    );
};

export default ProtectedRoute;