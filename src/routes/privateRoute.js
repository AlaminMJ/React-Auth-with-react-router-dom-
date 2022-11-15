import Seller from '../components/Seller';
import Worker from '../components/Worker';
import Payment from '../components/Payment';
import Dashboard from '../components/Dashboard';
import Manager from '../components/Manager';
import React from 'react';
const privateRoute = [
  {
    path: 'seller',
    element: <Seller />,
    role: 'seller',
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    role: 'all',
  },
  {
    path: 'worker',
    element: <Worker />,
    role: 'worker',
  },
  {
    path: 'manager',
    element: <Manager />,
    role: 'manager',
  },
  {
    path: 'payment',
    element: <Payment />,
    role: 'all',
  },
];
export default privateRoute;
