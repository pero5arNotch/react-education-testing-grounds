import { nanoid } from 'nanoid';

import { StoreDispatch, GetState } from '..';
import * as actionCreators from './actionCreators';
import Location from '../../models/Location';

type NewLocation = Omit<Location, 'id'>;

export function addLocation(location: NewLocation) {
  return (dispatch: StoreDispatch) => {
    const id = nanoid();
    dispatch(actionCreators.addLocation({ ...location, id }));
  };
}

export const clearLocations = () => (dispatch: StoreDispatch) => dispatch(actionCreators.clearLocations());

export function editLocation(location: Location) {
  return (dispatch: StoreDispatch) => {
    dispatch(actionCreators.removeLocation(location.id));
    dispatch(actionCreators.addLocation(location));
  };
}

export function loadLocations(locations: NewLocation[]) {
  return (dispatch: StoreDispatch) => {
    const locationsWithIds = locations.map((l) => ({ ...l, id: nanoid() }));
    dispatch(actionCreators.loadLocations(locationsWithIds));
  };
}

export function removeLocation(locationId: Location['id']) {
  return (dispatch: StoreDispatch, getState: GetState) => {
    const { locationById } = getState().locations;
    if (!locationById[locationId]) {
      return false;
    }
    dispatch(actionCreators.removeLocation(locationId));

    return true;
  };
}
