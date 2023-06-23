import "./App.css";
import { useDispatch } from "react-redux";
import Button from "components/Button";
import { FaAngleRight, FaBell } from "react-icons/fa6";
import Form from "components/Input/Form";
import Select from "components/Select/Select";
import { styled } from "styled-components";
import { openModal } from "redux/modules/modal";

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
      <Wrapper>
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
      </Wrapper>

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
        <Select />
      </div>
    </>
  );
}

const Wrapper = styled.form`
  max-width: 800px;
  margin: 0 auto;
  padding: 8px;
  display: flex;
  justify-content: space-around;
`;

export default App;
