import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  color: #3a5a40;
`;

export const PageContent = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 32px;
`;

export const LinkVideo = styled(Link)`
  color: white;
  border-radius: 10px;
  background-color: #da291c;
  padding: 10px;
  text-decoration: none;
`;

export const LinkFonte = styled(Link)`
  color: white;
  border-radius: 10px;
  background-color: grey;
  padding: 10px;
  text-decoration: none;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  /* padding: 0 4px; */
  margin-bottom: 20px;
`;

export const ContainerLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RecipeResultImg = styled.img`
  width: 100%;

  max-width: 700px;
  align-self: center;
  @media (max-width: 744px) {
  }
`;
