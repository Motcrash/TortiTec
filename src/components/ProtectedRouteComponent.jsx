import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isAuthenticated, to}) => {
    return isAuthenticated ? (
        element
    ) : (
        <Navigate to={to} replace/>
    );
};

export default ProtectedRoute;