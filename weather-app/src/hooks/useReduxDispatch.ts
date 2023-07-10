import { useDispatch } from 'react-redux';

import { StoreDispatch as ReduxDispatch } from '../redux';

const useReduxDispatch: () => ReduxDispatch = useDispatch;

export default useReduxDispatch;
