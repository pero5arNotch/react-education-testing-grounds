import * as actionTypes from './actionTypes';
import { LocationType } from './models';

type AddLocationAction = {
  type: typeof actionTypes.ADD;
  payload: LocationType;
};
export const addLocation = (location: LocationType): AddLocationAction => ({
  type: actionTypes.ADD,
  payload: location,
});

type ClearLocationsAction = {
  type: typeof actionTypes.CLEAR;
  payload: undefined;
};
export const clearLocations = (): ClearLocationsAction => ({
  type: actionTypes.CLEAR,
  payload: undefined,
});

type LoadLocationsAction = {
  type: typeof actionTypes.LOAD;
  payload: LocationType[];
};
export const loadLocations = (locations: LocationType[]): LoadLocationsAction => ({
  type: actionTypes.LOAD,
  payload: locations,
});

type RemoveLocationAction = {
  type: typeof actionTypes.REMOVE;
  payload: { id: LocationType['id'] };
};
export const removeLocation = (locationId: LocationType['id']): RemoveLocationAction => ({
  type: actionTypes.REMOVE,
  payload: { id: locationId },
});

export type LocationsAction = (
  | AddLocationAction
  | ClearLocationsAction
  | LoadLocationsAction
  | RemoveLocationAction
);
