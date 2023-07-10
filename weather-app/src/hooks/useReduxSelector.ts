import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState as ReduxRootState } from '../redux';

const useReduxSelector: TypedUseSelectorHook<ReduxRootState> = useSelector;

export default useReduxSelector;
