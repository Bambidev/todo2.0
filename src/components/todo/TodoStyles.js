import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodoContent = styled.div`
  background-color: white;
  width: 400px;
  border-radius: 10px;
  padding: 10px;
`;

export const TopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    margin: 0 auto;
  }
`;
