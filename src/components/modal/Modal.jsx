import React from "react";
import { S } from "./ModalStyle";
import { useDispatch } from "react-redux";
import { togleModal } from "redux/modules/modal";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <S.ModalBox>
      <S.ModalContent>
        <S.ModalBody>{children}</S.ModalBody>
        <S.ModalFooter>
          <button onClick={() => dispatch(togleModal())}>닫기</button>
          <button onClick={() => dispatch(togleModal())}>확인</button>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalBox>
  );
};

export default Modal;
