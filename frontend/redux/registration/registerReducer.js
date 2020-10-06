import { actionTypes, showRegisterModal } from './actions';

const initialState = { showRegistrationModal: false };

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_REGISTER_MODAL:
      return { showRegistrationModal: !state.showRegistrationModal };
    default:
      return state;
  }
}
