import Modal from "components/modal/Modal";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { togleModal } from "redux/modules/modal";
import Button from "components/Button";
import { FaAngleRight, FaBell } from "react-icons/fa6";
import Form from "components/Input/Form";
import Select from "components/Select/Select";

function App() {
  const { isOpen } = useSelector(state => {
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
