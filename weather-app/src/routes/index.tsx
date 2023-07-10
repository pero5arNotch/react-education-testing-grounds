import type { RouteObject } from 'react-router-dom';

import AddLocation from '../pages/AddLocation';
import EditLocation from '../pages/EditLocation';
import Home from '../pages/Home';
import ViewLocation from '../pages/ViewLocation';

export const ROUTE_PATHS = {
  HOME: '/',
  ADD_LOCATION: '/locations/add',
  EDIT_LOCATION: (id = ':id') => `/locations/${id}/edit`,
  VIEW_LOCATION: (id = ':id') => `/locations/${id}/view`,
};

const routes: RouteObject[] = [
  { path: ROUTE_PATHS.HOME, element: <Home /> },
  { path: ROUTE_PATHS.ADD_LOCATION, element: <AddLocation /> },
  { path: ROUTE_PATHS.EDIT_LOCATION(), element: <EditLocation /> },
  { path: ROUTE_PATHS.VIEW_LOCATION(), element: <ViewLocation /> }
];

export default routes;
