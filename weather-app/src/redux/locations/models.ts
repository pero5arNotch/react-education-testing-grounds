import Location from '../../models/Location';

/** For internal use in redux needs to extend implementation */
export type LocationType = Location;

export interface LocationsState {
  locationById: Record<LocationType['id'], Location>;
  locationIds: LocationType['id'][];
}