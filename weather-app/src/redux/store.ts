import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { IS_DEVELOPMENT } from '../constants/env';

import locationsReducer from './locations/reducer';

const rootReducer = combineReducers({
  locations: locationsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: IS_DEVELOPMENT,
});

export default store;
