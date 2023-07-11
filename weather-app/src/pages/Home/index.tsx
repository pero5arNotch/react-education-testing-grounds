import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';

import { LOCATIONS_STORE_KEY } from '../../constants/storage';
import useReduxSelector from '../../hooks/useReduxSelector';
import { ROUTE_PATHS } from '../../routes';

import LocationTableRow from './LocationTableRow';

function Home() {
  const { locationIds, locationById } = useReduxSelector((state) => state.locations);
  const navigate = useNavigate();

  const saveLocations = React.useCallback(() => {
    const data = Object.values(locationById);
    localStorage.setItem(LOCATIONS_STORE_KEY, JSON.stringify(data));
    alert(`${data.length} locations saved to storage!`);
  }, [locationById]);

  const addNewLocation = React.useCallback(() => {
    navigate(ROUTE_PATHS.ADD_LOCATION);
  }, [navigate]);

  return (
    <>
      <Row>
        <Col xs={10}>
          <h2>Locations</h2>
        </Col>
        <Col xs={2}>
          <div className="page-header__actions-container">
            <Button onClick={saveLocations} variant="success">Save</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Table hover>
            <thead>
              <tr>
                <th colSpan={2}>Id</th>
                <th colSpan={4}>Name</th>
                <th>Lat</th>
                <th>Lon</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10}>
                  <Stack>
                    <Button onClick={addNewLocation} variant="info">Add New Location</Button>
                  </Stack>
                </td>
              </tr>
              {locationIds.map((id) => <LocationTableRow key={id} id={id} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default Home;
