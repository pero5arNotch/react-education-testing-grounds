import store from './store';

export type GetState = typeof store.getState;
export type RootState = ReturnType<GetState>;
export type StoreDispatch = typeof store.dispatch;
