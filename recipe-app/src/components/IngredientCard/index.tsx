import React from "react";
import { useNavigate } from "react-router-dom";
import { Ingredient } from "./styles";
interface iIngredientsCard {
  name: string;
}

export const IngredientCard: React.FC<iIngredientsCard> = ({ name }) => {
  const navigate = useNavigate();

  return (
    <Ingredient onClick={() => navigate(`/mealsByIngredient/${name}`)}>
      {name}
    </Ingredient>
  );
};
