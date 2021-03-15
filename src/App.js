import React from "react";
import styled from "styled-components/macro";
import SimpleList from './SimpleList';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <AppContainer>
      <SimpleList/>
    </AppContainer>
  );
};

export default App;

