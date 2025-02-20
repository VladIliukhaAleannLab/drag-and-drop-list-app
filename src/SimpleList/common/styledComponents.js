import styled from "styled-components/macro";


export const WrapListBody = styled.div`
  width: 60vw;
  box-shadow: 0 0 200px 2vw #0000005c;
  border-radius: 10px;
  height: fit-content;
`;

export const WrapDropableList = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const WrapCreateTodo = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  margin-bottom: 15px;
  button {
    border-radius: 5px;
  }
`;

export const WrapHeaders = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
`;

export const HeaderTitle = styled.div`
  font-weight: 900;
  &.todo {
    color: #183fff;
  }
  &.progress {
    color: #1890ff;
  }
  &.complete {
    color: #33e99e;
  }
`;

export const WrapArea = styled.div`
  width: 50%;
  height: 415px;
  overflow: auto;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  &.todo {
    box-shadow: inset 0 0 3px 0px #183fff;
  }
  &.progress {
    box-shadow: inset 0 0 3px 0px #1890ff;
  }
  &.complete {
    box-shadow: inset 0 0 3px 0px #33e99e;
  }
`;

export const WrapItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  background: linear-gradient(0deg, #1890ff, #40a9ff4a);
  border-radius: 10px;
  padding: 5px 15px;
  margin: 10px;
  color: white;
  min-width: 170px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  transition: box-shadow .5s;
  &.todo {
    background: linear-gradient(0deg,#183fff,#60a2d8);
    :hover {
      box-shadow: 0px 1px 6px 0px #183fff;
    }
  }
  &.progress {
    background: linear-gradient(0deg, #1890ff, #40a9ff4a);
    :hover {
      box-shadow: 0px 1px 6px 0px #1890ff;
    }
  }
  &.complete {
    background: linear-gradient(0deg,#33e99e,#40ff844a);
    :hover {
      box-shadow: 0px 1px 6px 0px #33e99e;
    }
  }

`;