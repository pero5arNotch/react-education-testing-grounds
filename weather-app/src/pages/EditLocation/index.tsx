import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate, useParams, Link } from 'react-router-dom';

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

  const editLocation = React.useCallback((data: LocationFormData) => {
    dispatch(locationsActions.editLocation({ ...data, id }));
    navigate(ROUTE_PATHS.HOME);
  }, [dispatch, navigate, id]);

  const initialValues = React.useMemo(() => ({
    name: locationData.name,
    lat: locationData.lat,
    lon: locationData.lon,
  }), [locationData]);

  if (!locationData) {
    return <Navigate to={ROUTE_PATHS.HOME} />;
  }

  return (
    <>
      <Row>
        <Col xs={10}>
          <h2>Edit Location <var>{id}</var></h2>
        </Col>
        <Col xs={2}>
          <div className="page-header__actions-container">
            <Link to={ROUTE_PATHS.HOME}>
              <Button variant="success" as="div">Back</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <LocationForm onSubmit={editLocation} initialValues={initialValues} />
        </Col>
      </Row>
    </>
  );
}

export default EditLocation;
