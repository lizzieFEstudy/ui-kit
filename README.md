# UI KIT

## Modal

- 취소, 확인이 있고, overlay를 클릭했을 때 모달이 닫히지 않는 형태
- 닫기 버튼만 있고, overlay를 클릭했을 때 모달이 닫히는 형태

## Button

- 6가지

## Button

- 일반형식의 input
- 숫자를 넣었을 때, 3자리 수마다 콤마 ,가 찍히는 input
- form을 구현하고 각 input에 값을 입력하고 저장 버튼을 눌렀을 때 {name: '아무 텍스트', price: "콤마가 없는 금액"} 을 alert에 표시

## Select

- select를 클릭했을 때, option 들이 나오고 해당 option을 클릭하면 select의 값이 변경
- select를 클릭했을 때 부모 요소에 의해서 가려지지 않도록 구현합니다. 부모 요소에 overflow: hidden을 적용하면 자식 컴포넌트가 부모 컴포넌트를 넘어갔을 때 가려지게 됩니다. 부모 컴포넌트에 hidden 속성이 있다고 하더라도 select는 가려지지 않아야 합니다.
