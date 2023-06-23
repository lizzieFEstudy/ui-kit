import React, { useState } from "react";

const Input = ({ name }) => {
  const [value, setValue] = useState("");

  const onChangeHandler = e => {
    setValue(e.target.value);
  };

  return (
    <input type="text" onChange={onChangeHandler} value={value} name={name} />
  );
};

export default Input;
