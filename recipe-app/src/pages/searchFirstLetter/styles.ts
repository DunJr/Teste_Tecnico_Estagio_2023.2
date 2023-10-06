import styled from "styled-components";
interface iButtonProps {
  active?: boolean;
}

export const Title = styled.h1`
  color: #3a5a40;
`;

export const PageContent = styled.form`
  height: 100%;
  padding: 0 32px;
`;

export const Abutton = styled.button<iButtonProps>`
  ${({ active }) => active && "background-color: orange;"}
`;

export const CardContainer = styled.div`
  margin-top: 30px;
`;
