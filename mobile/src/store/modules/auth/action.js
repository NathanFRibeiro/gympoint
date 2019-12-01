export function signInRequest(studentID) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { studentID },
  };
}

export function signInSuccess(id, name) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { id, name },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
