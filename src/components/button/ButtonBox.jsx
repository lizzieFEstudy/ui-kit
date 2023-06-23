import React from "react";
import { styled } from "styled-components";

const ButtonBox = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

const StyledBox = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export default ButtonBox;
