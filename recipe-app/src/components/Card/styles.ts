import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
`;

export const ContainerImg = styled.img`
  width: 100%;
  height: 192px;
  aspect-ratio: 1/1;
`;

export const ContainerCont = styled.div`
  height: 180;
  padding: 0 0 24px 12px;
`;

export const LinkVideo = styled(Link)`
  color: white;
  border-radius: 10px;
  background-color: #da291c;
  padding: 10px;
  text-decoration: none;
`;
