import React, { useState } from "react";

const InputNumber = ({ placeholder, name }) => {
  const [value, setValue] = useState("");

  const addComma = price => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  const onChangePoints = e => {
    const { value } = e.target;
    let str = value.replaceAll(",", "");
    setValue(str);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={e => onChangePoints(e)}
      value={addComma(value) || ""}
      name={name}
    />
  );
};

export default InputNumber;
