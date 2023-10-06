// import React from "react";
import Card from "../../components/Card/index.js";
// import { iMeals } from "../../components/Card/index.js";
import { useListRecipe } from "../../hooks";

import { Container, Home, Title } from "./styles";
import { Header } from "../../components/Header/index.js";

export const HomePage = () => {
  const { data } = useListRecipe();

  return (
    <div>
      <Header></Header>
      <Home>
        <Title>Receitas Aleatórias</Title>
        <Container>
          <Card meals={data} />
        </Container>
      </Home>
    </div>
  );
};
