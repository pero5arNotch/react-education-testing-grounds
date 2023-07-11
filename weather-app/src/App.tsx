import React from 'react';
import Container from 'react-bootstrap/Container';
import { useRoutes } from 'react-router-dom';

import { LOCATIONS_STORE_KEY } from './constants/storage';
import routes from './routes';
import useReduxDispatch from './hooks/useReduxDispatch';
import { locationsActions } from './redux/locations';
import Location from './models/Location';
import Navigation from './components/Navigation';

function App() {
  const content = useRoutes(routes);
  const dispatch = useReduxDispatch();

  React.useEffect(() => {
    const dataString = localStorage.getItem(LOCATIONS_STORE_KEY);
    const data = dataString ? (JSON.parse(dataString) as Location[]) : null;
    if (data) {
      dispatch(locationsActions.loadLocations(data));
    }
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <div className="p-3" />
      <Container>
        {content}
      </Container>
    </>
  );
}

export default App;
