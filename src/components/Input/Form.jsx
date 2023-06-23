import React, { useState } from "react";
import Input from "./Input";
import InputNumber from "./InputNumber";
import { valueToNode } from "@babel/types";

const Form = () => {
  const onSubmitHandler = e => {
    e.preventDefault();
    let target = e.target.querySelectorAll("[name]");
    let obj = {};
    target.forEach(({ name, value }) => {
      obj[name] = value.replaceAll(",", "");
    });
    alert(JSON.stringify(obj));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input name="name" />
      <InputNumber name="price" placeholder="금액 입력" />
      <button>제출</button>
    </form>
  );
};

export default Form;
