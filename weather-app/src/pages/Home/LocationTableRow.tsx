import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';

import useReduxSelector from '../../hooks/useReduxSelector';
import { ROUTE_PATHS } from '../../routes';

interface Props {
  id: string;
}

function LocationTableRow({ id }: Props) {
  const locationData = useReduxSelector((state) => state.locations.locationById[id]);
  const navigate = useNavigate();

  return (
    <tr>
      <td colSpan={2}><var>{locationData.id}</var></td>
      <td colSpan={4}>{locationData.name}</td>
      <td>{locationData.lat}</td>
      <td>{locationData.lon}</td>
      <td colSpan={2}>
        <Stack gap={2} direction="horizontal">
          <Button variant="success" onClick={() => navigate(ROUTE_PATHS.VIEW_LOCATION(id))}>View</Button>
          <Button variant="warning" onClick={() => navigate(ROUTE_PATHS.EDIT_LOCATION(id))}>Edit</Button>
        </Stack>
      </td>
    </tr>
  );
}

export default LocationTableRow;
