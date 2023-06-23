import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectData, togleSelect } from "redux/modules/select";
import SelectList from "./SelectList";

const Select = ({ options }) => {
  const { isOpen, isSelected } = useSelector(state => {
    return state.select;
  });

  const dispatch = useDispatch();

  dispatch(addSelectData(options));

  return (
    <>
      <div>
        <button onClick={() => dispatch(togleSelect())}>
          {isSelected.name}
        </button>
        {isOpen === true ? <SelectList /> : null}
      </div>
    </>
  );
};

export default Select;
