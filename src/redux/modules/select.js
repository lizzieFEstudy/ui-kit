// Action Value
const TOGLE_SELECT = "select/TOGLE_SELECT";
const GET_SELECTED_ITEM = "select/GET_SELECTED_ITEM";
const ADD_SELECT_DATA = "select/ADD_SELECT_DATA";

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
export const addSelectData = (options, defaultValue) => {
  return {
    type: ADD_SELECT_DATA,
    options,
    defaultValue
  };
};

// Initial State
const initialState = {
  isOpen: false,
  data: [
    { value: "1", name: "아이템1" },
    { value: "2", name: "아이템2" },
    { value: "3", name: "아이템3" },
    { value: "4", name: "아이템4" }
  ],
  isSelected: { value: "1", name: "아이템1" },
  defaultValue: 1
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
        isSelected: state.data.find(item => item.value == action.payload)
      };
    case ADD_SELECT_DATA:
      return {
        ...state,
        data: action.options,
        isSelected: state.data.find(item => item.value == action.defaultValue),
        defaultValue: action.defaultValue
      };
    default:
      return state;
  }
};

// export default reducer
export default select;
