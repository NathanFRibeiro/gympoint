import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  loading: false,
  id: null,
  name: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.id = action.payload.id;
        draft.name = action.payload.name;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.signed = false;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
