import styled from "styled-components";

export const S = {
  ModalBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1050;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  `,
  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background: #fff;
  `,
  ModalBody: styled.div`
    padding: 16px;
  `,
  ModalFooter: styled.div`
    padding: 16px;
  `
};
