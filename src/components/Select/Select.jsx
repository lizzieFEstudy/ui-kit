import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedItem, togleSelect } from "redux/modules/select";

const Select = () => {
  const { isOpen, data, isSelected } = useSelector(state => {
    return state.select;
  });

  const itemOnClickHandler = e => {
    dispatch(getSelectedItem(e.target.value));
  };

  const dispatch = useDispatch();
  return (
    <>
      {/* <div>
        <button onClick={() => dispatch(togleSelect())}>{isSelected}</button>
        {isOpen === true ? (
          <ul>
            {data.map(item => {
              <li value={data.val} onClick={itemOnClickHandler}>
                {data.name}
              </li>;
            })}
          </ul>
        ) : null}
      </div> */}
    </>
  );
};

export default Select;
