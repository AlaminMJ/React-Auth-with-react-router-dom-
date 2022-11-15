import privateRoute from './privateRoute';
import { Navigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import React from 'react';
const user = {
  role: 'manager',
};

const ProtectedRoute = ({ r, children }) => {
  if (user) {
    if (r.role === user.role) {
      return children;
    } else {
      return <Navigate to={'/not-access'} />;
    }
  }
  return <Navigate to={'/login'} replace />;
};

export const getRoute = () => {
  const filterRoute = [];
  privateRoute.map((route) => {
    route.element = <ProtectedRoute r={route}>{route.element}</ProtectedRoute>;
    return filterRoute.push(route);
  });
  return { path: 'dashboard', element: <Dashboard />, children: filterRoute };
};
