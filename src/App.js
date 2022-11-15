import React, { useState, useEffect } from 'react';
import { getRoute } from './routes';
import publicRoute from './routes/publicRoute';
import Router from './routes/Router';

export default function App() {
  const [allRoute, setAllRoute] = useState([...publicRoute]);
  useEffect(() => {
    const route = getRoute();

    setAllRoute([...publicRoute, route]);
  }, []);

  return <Router router allRouter={allRoute} />;
}
