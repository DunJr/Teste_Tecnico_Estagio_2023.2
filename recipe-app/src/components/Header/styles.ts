import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 59px;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 16px;
  gap: 32px;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
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
  color: #588157;
`;
