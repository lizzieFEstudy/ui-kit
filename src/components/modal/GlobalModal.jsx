import { useDispatch, useSelector } from "react-redux";
import BasicModal from "./BasicModal";
import OverlayModal from "./OverlayModal";
import { styled } from "styled-components";

const MODAL_TYPES = {
  BasicModal: "BasicModal",
  OverlayModal: "OverlayModal"
};

const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.BasicModal,
    component: <BasicModal />
  },
  {
    type: MODAL_TYPES.OverlayModal,
    component: <OverlayModal />
  }
];

const GlobalModal = () => {
  // const { modalType, isOpen } = useSelector(state => state.modal);
  //   const test = useSelector(state => state);
  const { modalType, isOpen } = useSelector(state => {
    return state.modal;
  });
  console.log("팝업테스트 ㅜㅠ modalType => ", modalType);
  console.log("팝업테스트 ㅜㅠ isOpen => ", isOpen);
  const dispatch = useDispatch();
  if (!isOpen) return;

  const findModal = MODAL_COMPONENTS.find(modal => {
    return modal.type === modalType;
  });

  const renderModal = () => {
    return findModal.component;
  };

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    z-index: 1;
  `;

  return (
    <>
      {/* <div>
        <div onClick={() => dispatch(closeModal())} />
        {renderModal()}
      </div> */}
      <Container>{renderModal()}</Container>
    </>
  );
};

export default GlobalModal;
