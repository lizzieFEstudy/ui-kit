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
    <ul>
      {data.map(item => {
        return (
          <li key={item.val} value={item.val} onClick={itemOnClickHandler}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default SelectList;
