import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedItem } from "redux/modules/select";

const SelectList = () => {
  const { data } = useSelector(state => {
    return state.select;
  });
  const dispatch = useDispatch();

  const itemOnClickHandler = e => {
    dispatch(getSelectedItem(e.target.value));
  };

  console.log("data => ", data);

  return (
    <ul style={{ position: "absolute", zIndex: "100" }}>
      {data.map(item => {
        return (
          <li key={item.value} value={item.value} onClick={itemOnClickHandler}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default SelectList;
