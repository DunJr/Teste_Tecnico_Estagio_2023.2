// import React from "react";
import { StyledHeader, Container, Links, Icon } from "./styles";
import HomeIcon from "../../assets/header/home.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <a href="/">
          <Icon src={HomeIcon} alt="Home Icon" />
        </a>
      </Container>
      <Container>
        <Links href="/searchName">Pesquisar</Links>
        <Links href="/SearchFirstLetter">Listar por Primeira Letra</Links>
        <Links href="/searchIngredients">Listar por Ingrediente</Links>
      </Container>
      <div />
    </StyledHeader>
  );
};
