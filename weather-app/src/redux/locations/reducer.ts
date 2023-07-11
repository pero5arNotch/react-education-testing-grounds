import { LocationsAction } from './actionCreators';
import * as actionTypes from './actionTypes';
import { LocationsState } from './models';

const initialState: LocationsState = {
  locationById: {},
  locationIds: [],
};

export default function locationReducer(state: LocationsState = initialState, action: LocationsAction): LocationsState {
  switch (action.type) {

    case actionTypes.ADD:
      return {
        ...state,
        locationById: {
          ...state.locationById,
          [action.payload.id]: action.payload
        },
        locationIds: [action.payload.id, ...state.locationIds],
      };

    case actionTypes.CLEAR:
      return initialState;

    case actionTypes.LOAD:
      return action.payload.reduce<LocationsState>(
        (resultState, currentLocation) => ({
          ...resultState,
          locationById: {
            ...resultState.locationById,
            [currentLocation.id]: currentLocation
          },
          locationIds: [...resultState.locationIds, currentLocation.id],
        }),
        { ...initialState }
      );

    case actionTypes.REMOVE: {
      const locationById = { ...state.locationById };
      delete locationById[action.payload.id];

      return {
        ...state,
        locationById,
        locationIds: state.locationIds.filter((id) => id !== action.payload.id),
      };
    }

    default:
      return state;
  }
}
