import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ userRole, allowedRoles, children }) => {
    if (!userRole || !allowedRoles.includes(userRole)) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;
