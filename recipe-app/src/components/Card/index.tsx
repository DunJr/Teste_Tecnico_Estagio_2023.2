import React from "react";
import { useNavigate } from "react-router-dom";

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
  strCategory?: string;
  strArea?: string;
  strTags?: string;
  strIngredient1?: string | null;
  strIngredient2?: string | null;
  strIngredient3?: string | null;
  strIngredient4?: string | null;
  strIngredient5?: string | null;
  strIngredient6?: string | null;
  strIngredient7?: string | null;
  strIngredient8?: string | null;
  strIngredient9?: string | null;
  strIngredient10?: string | null;
  strIngredient11?: string | null;
  strIngredient12?: string | null;
  strIngredient13?: string | null;
  strIngredient14?: string | null;
  strIngredient15?: string | null;
  strIngredient16?: string | null;
  strIngredient17?: string | null;
  strIngredient18?: string | null;
  strIngredient19?: string | null;
  strIngredient20?: string | null;
  strMeasure1?: string | null;
  strMeasure2?: string | null;
  strMeasure3?: string | null;
  strMeasure4?: string | null;
  strMeasure5?: string | null;
  strMeasure6?: string | null;
  strMeasure7?: string | null;
  strMeasure8?: string | null;
  strMeasure9?: string | null;
  strMeasure10?: string | null;
  strMeasure11?: string | null;
  strMeasure12?: string | null;
  strMeasure13?: string | null;
  strMeasure14?: string | null;
  strMeasure15?: string | null;
  strMeasure16?: string | null;
  strMeasure17?: string | null;
  strMeasure18?: string | null;
  strMeasure19?: string | null;
  strMeasure20?: string | null;
  strSource?: string;
}

export interface iMeals {
  meals: iCard[];
}

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
            <h2>{item?.strMeal}</h2>
            <p>{item?.strInstructions.slice(0, 150)}</p>
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
