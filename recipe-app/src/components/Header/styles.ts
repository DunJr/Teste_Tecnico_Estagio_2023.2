import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  background-color: white;
`;

export const Container = styled.div`
  display: flex;
  text-decoration: none;
  margin: 0 30px;
  gap: 10px;
`;

export const Icon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const Links = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #da291c;
`;
