import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSuccess, signFailure } from './action';

export function* signIn({ payload }) {
  try {
    const { studentID } = payload;

    if (!studentID) {
      Alert.alert('Student ID is required!', 'Please, type a valid ID.');
      throw new Error();
    }

    const response = yield call(api.get, `students/${studentID}`);

    if (response.data) {
      const { name, id } = response.data;

      yield put(signInSuccess(id, name));
    } else {
      Alert.alert('Student not found!', 'Please, type a valid ID.');
      throw new Error();
    }
  } catch (error) {
    yield put(signFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
