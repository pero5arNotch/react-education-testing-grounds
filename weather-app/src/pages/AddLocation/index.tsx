import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

import { locationsActions } from '../../redux/locations';
import useReduxDispatch from '../../hooks/useReduxDispatch';
import LocationForm, { FormData as LocationFormData } from '../../components/LocationForm';
import { ROUTE_PATHS } from '../../routes';

function AddLocation() {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();

  const addLocation = React.useCallback((data: LocationFormData) => {
    dispatch(locationsActions.addLocation(data));
    navigate(ROUTE_PATHS.HOME);
  }, [dispatch, navigate]);

  return (
    <>
      <Row>
        <Col xs={12}>
          <h2>Add New Location</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <LocationForm onSubmit={addLocation} />
        </Col>
      </Row>
    </>
  );
}

export default AddLocation;
