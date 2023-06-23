import "./App.css";
import { useDispatch } from "react-redux";
import Button from "components/button/Button";
import { FaAngleRight, FaBell } from "react-icons/fa6";
import Form from "components/Input/Form";
import Select from "components/select/Select";
import { styled } from "styled-components";
import { openModal } from "redux/modules/modal";
import ButtonBox from "components/button/ButtonBox";

function App() {
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(openModal("BasicModal"));
  };

  const handleOverayModalOpen = () => {
    dispatch(openModal("OverlayModal"));
  };

  return (
    <>
      <h1>UI Kit</h1>
      <h2>Modal</h2>
      <button onClick={handleModalOpen}>모달 테스트</button>
      <button onClick={handleOverayModalOpen}>오버레이버전 모달 테스트</button>

      <h2>Button</h2>
      <ButtonBox>
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
      </ButtonBox>

      <h2>Input</h2>
      <Form />

      <h2>Select</h2>
      <div
        style={{
          overflow: "hidden",
          height: "50px",
          background: "#abf",
          padding: "20px"
        }}
      >
        <Select
          options={[
            { value: "1", name: "테스트" },
            { value: "2", name: "되나?" },
            { value: "3", name: "아이템3" }
          ]}
        />
      </div>
    </>
  );
}

export default App;
