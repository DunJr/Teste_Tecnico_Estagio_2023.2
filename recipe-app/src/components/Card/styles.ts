import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  @media (min-width: 744px) {
    width: 30%;
  }
`;

export const ContainerImg = styled.img`
  width: 100%;
  height: 192px;
  aspect-ratio: 1/1;
`;

export const ContainerCont = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 0 24px 12px;
`;

export const LinkVideo = styled(Link)`
  display: flex;
  width: fit-content;
  color: white;
  border-radius: 10px;
  background-color: #da291c;
  padding: 10px 16px;
  text-decoration: none;
`;

export const MealName = styled.h2`
  color: #a3b18a;
`;
