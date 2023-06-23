// Action Value
const OPEN_MODAL = "modal/OPEN_MODAL";
const CLOSE_MODAL = "modal/CLOSE_MODAL";

// Action Creator
export const openModal = payload => {
  return {
    type: OPEN_MODAL,
    payload
  };
};
export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

// Initial State
const initialState = {
  modalType: "",
  isOpen: false
};

// Reducer
const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalType: action.payload,
        isOpen: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

// export default reducer
export default modal;
