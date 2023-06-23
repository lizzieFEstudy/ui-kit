// Action Value
const TOGLE_SELECT = "select/TOGLE_SELECT";
const GET_SELECTED_ITEM = "select/GET_SELECTED_ITEM";

// Action Creator
export const togleSelect = payload => {
  return {
    type: TOGLE_SELECT,
    payload
  };
};
export const getSelectedItem = payload => {
  return {
    type: GET_SELECTED_ITEM,
    payload
  };
};

// Initial State
const initialState = {
  isOpen: false,
  data: [
    { val: "1", name: "아이템1" },
    { val: "2", name: "아이템2" },
    { val: "3", name: "아이템3" },
    { val: "4", name: "아이템4" }
  ],
  isSelected: { val: "1", name: "아이템1" }
};

// Reducer
const select = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_SELECT:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case GET_SELECTED_ITEM:
      return {
        ...state,
        isOpen: !state.isOpen,
        isSelected: state.data.find(item => item.val == action.payload)
      };
    default:
      return state;
  }
};

// export default reducer
export default select;
