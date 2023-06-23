import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectData, togleSelect } from "redux/modules/select";
import SelectList from "./SelectList";

const Select = ({ options, defaultValue }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSelectData(options, defaultValue));
  }, []);

  const { isOpen, isSelected } = useSelector(state => {
    return state.select;
  });

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
