// Action Value
const TOGLE_MODAL = "modal/TOGLE_MODAL";
const TOGLE_MODAL2 = "modal/TOGLE_MODAL2";

// Action Creator
export const togleModal = payload => {
  return {
    type: TOGLE_MODAL,
    payload
  };
};
export const togleModal2 = payload => {
  return {
    type: TOGLE_MODAL2,
    payload
  };
};

// Initial State
const initialState = {
  isOpen: false,
  isOpen2: false
};

// Reducer
const modal = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case TOGLE_MODAL2:
      return {
        ...state,
        isOpen2: !state.isOpen2
      };
    default:
      return state;
  }
};

// export default reducer
export default modal;
