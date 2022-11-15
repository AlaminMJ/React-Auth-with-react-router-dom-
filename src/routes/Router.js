import { useRoutes } from 'react-router-dom';
import Racet from 'react';
const Router = ({ allRouter }) => {
  const route = useRoutes([...allRouter]);
  return route;
};
export default Router;
