import { takeLatest } from '@redux-saga/core/effects';
import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunks';
import { finishLoading } from './loading';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

export const getPostSaga = createAction(GET_POST, (id) => id);
export const getUsersSaga = createAction(GET_USERS);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.post = payload;
      }),
    [GET_USERS_SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.users = payload;
      }),
  },
  initialState
);

export default sample;
