import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togleSelect } from "redux/modules/select";
import SelectList from "./SelectList";

const Select = () => {
  const { isOpen, isSelected } = useSelector(state => {
    return state.select;
  });

  const dispatch = useDispatch();
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
