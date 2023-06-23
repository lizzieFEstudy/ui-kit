// Action Value
const TOGLE_MODAL = "modal/TOGLE_MODAL";

// Action Creator
export const togleModal = payload => {
  return {
    type: TOGLE_MODAL,
    payload
  };
};

// Initial State
const initialState = {
  isOpen: false
};

// Reducer
const modal = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};

// export default reducer
export default modal;
