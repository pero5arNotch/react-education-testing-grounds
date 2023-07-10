import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Location from '../../models/Location';

import styles from './index.module.css';

export type FormData = Omit<Location, 'id'>;

interface Props {
  onSubmit: (data: FormData) => void;
  initialValues?: FormData;
}

function LocationForm(props: Props) {
  const { onSubmit, initialValues } = props;
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: initialValues });

  console.log(errors);

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control {...register('name', { required: true, minLength: 3 })} />
        <Form.Text>{errors?.name ? 'Field is required and must be at least 3 characters long' : ''}</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Latitude</Form.Label>
        <Form.Control {...register('lat', { required: true, min: -90, max: 90 })} />
        <Form.Text>{errors?.lat ? 'Field is required and must be between [-90, 90]' : ''}</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Longitude</Form.Label>
        <Form.Control {...register('lon', { required: true, min: -180, max: 180 })} />
        <Form.Text>{errors?.lon ? 'Field is required and must be between [-180, 180]' : ''}</Form.Text>
      </Form.Group>
      <Button className={styles['submit-btn']} variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default LocationForm;
