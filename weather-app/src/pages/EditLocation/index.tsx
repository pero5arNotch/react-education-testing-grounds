import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';

import { ROUTE_PATHS } from '../../routes';
import { locationsActions } from '../../redux/locations';
import useReduxDispatch from '../../hooks/useReduxDispatch';
import useReduxSelector from '../../hooks/useReduxSelector';
import LocationForm, { FormData as LocationFormData } from '../../components/LocationForm';

function EditLocation() {
  const { id = 'fallback_id' } = useParams();
  const locationData = useReduxSelector((state) => state.locations.locationById[id]);
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    // TODO: redirect if no data
  }, [locationData]);

  const addLocation = React.useCallback((data: LocationFormData) => {
    dispatch(locationsActions.editLocation({ ...data, id }));
    navigate(ROUTE_PATHS.HOME);
    // TODO: redirect
  }, [dispatch, navigate, id]);

  const initialValues = React.useMemo(() => ({
    name: locationData.name,
    lat: locationData.lat,
    lon: locationData.lon,
  }), [locationData]);

  return (
    <>
      <Row>
        <Col xs={12}>
          <h2>Edit Location <var>{id}</var></h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <LocationForm onSubmit={addLocation} initialValues={initialValues} />
        </Col>
      </Row>
    </>
  );
}

export default EditLocation;
