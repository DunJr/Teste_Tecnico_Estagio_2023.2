import styled from "styled-components";

export const Ingredient = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid #ececec;
  background-color: white;
  border-radius: 5px;

  &:hover {
    color: white;
    font-weight: bold;
    background-color: #ffc72c;
    transition: 150ms;
  }
`;
