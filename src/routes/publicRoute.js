import Home from '../components/Home';
import React from 'react';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import NotAccess from '../components/NotAccess';

const publicRoute = [
  {
    path: '',
    element: <Home />,
  },

  {
    path: 'not-access',
    element: <NotAccess />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
export default publicRoute;
