import styled from "styled-components";

const Title = styled.h1`
  color: #8257e6;
  font-size: 64px;

  button: {
    background: #000;
  }
`;

function App() {
  return (
    <div className="App">
      <Title>
        App <button>Salvar</button>
      </Title>
    </div>
  );
}

export default App;
