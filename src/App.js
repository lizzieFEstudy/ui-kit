import Modal from "components/modal/Modal";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { togleModal, togleModal2 } from "redux/modules/modal";
import Button from "components/Button";
import { FaAngleRight, FaBell } from "react-icons/fa6";
import Form from "components/Input/Form";
import Select from "components/Select/Select";
import Modal2 from "components/modal/Modal2";

function App() {
  const { isOpen, isOpen2 } = useSelector(state => {
    return state.modal;
  });
  console.log("isOpen => ", isOpen);

  const dispatch = useDispatch();

  return (
    <>
      <h1>UI Kit</h1>
      <h2>Modal</h2>
      <button onClick={() => dispatch(togleModal())}>모달1</button>
      {isOpen === true ? (
        <Modal>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </Modal>
      ) : null}
      <button onClick={() => dispatch(togleModal2())}>모달2</button>
      {isOpen2 === true ? (
        <Modal2>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</Modal2>
      ) : null}

      <h2>Button</h2>
      <Button size="sm">Small</Button>
      <Button variant="success" size="sm" disabled>
        disabled
      </Button>
      <Button variant="successOutline">Medium</Button>
      <Button variant="error" size="lg">
        Large <FaBell size={16} />
      </Button>
      <Button variant="warning" size="lg">
        Large <FaAngleRight size={16} />
      </Button>

      <h2>Input</h2>
      <Form />

      <h2>Select</h2>
      <Select />
    </>
  );
}

export default App;
