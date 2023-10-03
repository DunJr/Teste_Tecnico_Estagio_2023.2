import React from "react";

import {
  ContainerImg,
  ContainerCont,
  ContainerCard,
  LinkVideo,
  Container,
} from "./styles";

export interface iCard {
  strMealThumb: string;
  strMeal: string;
  strInstructions: string;
  strYoutube: string;
}

export interface iMeals {
  meals: iCard[];
}

const Card: React.FC<iMeals> = ({ meals }) => {
  return (
    <Container>
      {meals?.map((item: iCard) => (
        <ContainerCard key={item.strMeal}>
          <ContainerImg src={item?.strMealThumb} alt={item?.strMeal} />
          <ContainerCont>
            <h2>{item?.strMeal}</h2>
            <p>{item?.strInstructions}</p>
            <LinkVideo to={item?.strYoutube} target="_blank">
              YouTube
            </LinkVideo>
          </ContainerCont>
        </ContainerCard>
      ))}
    </Container>
  );
};

export default Card;
