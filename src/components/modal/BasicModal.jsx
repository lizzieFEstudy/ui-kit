import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "redux/modules/modal";
import { styled } from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Content = styled.section`
  width: 20rem;
  height: 5rem;
  background: #fff;
  padding: 2rem;
  z-index: 1;
`;

const BasicModal = () => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Overlay />
      <Content>
        모달 창입니다<button onClick={handleModalClose}>닫기</button>
      </Content>
    </>
  );
};

export default BasicModal;
