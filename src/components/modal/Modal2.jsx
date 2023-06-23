import React from "react";
import { S } from "./ModalStyle";
import { useDispatch } from "react-redux";
import { togleModal2 } from "redux/modules/modal";

const Modal2 = ({ children }) => {
  const dispatch = useDispatch();

  const bgOnClickHandler = e => {
    if (e.currentTarget == e.target) {
      dispatch(togleModal2());
    }
  };

  return (
    <S.ModalBox onClick={bgOnClickHandler}>
      <S.ModalContent>
        <S.ModalBody>{children}</S.ModalBody>
        <S.ModalFooter>
          <button onClick={() => dispatch(togleModal2())}>닫기</button>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalBox>
  );
};

export default Modal2;
