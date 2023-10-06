import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ContainerImg,
  ContainerCont,
  ContainerCard,
  LinkVideo,
  Container,
} from "./styles";

import { iCard, iMeals } from "./types";

const Card: React.FC<iMeals> = ({ meals }) => {
  const navigate = useNavigate();

  return (
    <Container>
      {meals?.map((item: iCard) => (
        <ContainerCard key={item.strMeal}>
          <ContainerImg
            onClick={() => navigate(`/recipeDetails/${item.strMeal}`)}
            src={item?.strMealThumb}
            alt={item?.strMeal}
          />
          <ContainerCont>
            <div>
              <h2>{item?.strMeal}</h2>
              <p>{item?.strInstructions?.slice(0, 150)}</p>
            </div>
            <LinkVideo to={item?.strYoutube ?? "google.com"} target="_blank">
              YouTube
            </LinkVideo>
          </ContainerCont>
        </ContainerCard>
      ))}
    </Container>
  );
};

export default Card;
