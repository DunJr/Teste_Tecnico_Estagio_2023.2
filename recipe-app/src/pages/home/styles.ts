import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (min-width: 744) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Home = styled.div`
  height: 100%;
  padding: 0 32px;
`;

export const Title = styled.h1`
  color: #ffc72c;
`;
