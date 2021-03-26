import produce from 'immer';
import { createAction, handleAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
);
export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, { payload }) =>
      produce(state, (draft) => {
        draft[payload] = true;
      }),
    [FINISH_LOADING]: (state, { payload }) =>
      produce(state, (draft) => {
        draft[payload] = false;
      }),
  },
  initialState
);

export default loading;
