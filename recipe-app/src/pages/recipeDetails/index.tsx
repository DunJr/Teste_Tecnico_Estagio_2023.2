import axios from "axios";
import { iCard } from "components/Card";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageContent, Title, LinkVideo, LinkFonte } from "./styles";
import { Header } from "../../components/Header";

export const RecipeDetails = () => {
  const params = useParams();
  console.log(params);

  const [data, setData] = useState<iCard[]>([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.id}`)
      .then((res) => {
        setData(res.data.meals);
      })
      .catch(console.error);
  }, []);

  const findObject = data.find((item) => item.strMeal === params.id);

  return (
    <div>
      <Header></Header>
      <PageContent>
        <Title>{params.id}</Title>
        <img src={findObject?.strMealThumb} />

        <p>{`Categoria: ${findObject?.strCategory}`}</p>
        <p>{`Area: ${findObject?.strArea}`}</p>
        <p>{`Tags: ${findObject?.strTags}`}</p>
        <p>{`Instruções: ${findObject?.strInstructions}`}</p>

        <h2>Ingredientes</h2>

        <ol>
          <li>{findObject?.strIngredient1 ?? ""}</li>
          <li>{findObject?.strIngredient2 ?? ""}</li>
          <li>{findObject?.strIngredient3 ?? ""}</li>
          <li>{findObject?.strIngredient4 ?? ""}</li>
          <li>{findObject?.strIngredient5 ?? ""}</li>
          <li>{findObject?.strIngredient6 ?? ""}</li>
          <li>{findObject?.strIngredient7 ?? ""}</li>
          <li>{findObject?.strIngredient8 ?? ""}</li>
          <li>{findObject?.strIngredient9 ?? ""}</li>
          <li>{findObject?.strIngredient10 ?? ""}</li>
          <li>{findObject?.strIngredient11 ?? ""}</li>
          <li>{findObject?.strIngredient12 ?? ""}</li>
          <li>{findObject?.strIngredient13 ?? ""}</li>
          <li>{findObject?.strIngredient14 ?? ""}</li>
          <li>{findObject?.strIngredient15 ?? ""}</li>
          <li>{findObject?.strIngredient16 ?? ""}</li>
          <li>{findObject?.strIngredient17 ?? ""}</li>
          <li>{findObject?.strIngredient18 ?? ""}</li>
          <li>{findObject?.strIngredient19 ?? ""}</li>
          <li>{findObject?.strIngredient20 ?? ""}</li>
        </ol>

        <h2>Medidas</h2>

        <ol>
          <li>{findObject?.strMeasure1 ?? ""}</li>
          <li>{findObject?.strMeasure2 ?? ""}</li>
          <li>{findObject?.strMeasure3 ?? ""}</li>
          <li>{findObject?.strMeasure4 ?? ""}</li>
          <li>{findObject?.strMeasure5 ?? ""}</li>
          <li>{findObject?.strMeasure6 ?? ""}</li>
          <li>{findObject?.strMeasure7 ?? ""}</li>
          <li>{findObject?.strMeasure8 ?? ""}</li>
          <li>{findObject?.strMeasure9 ?? ""}</li>
          <li>{findObject?.strMeasure10 ?? ""}</li>
          <li>{findObject?.strMeasure11 ?? ""}</li>
          <li>{findObject?.strMeasure12 ?? ""}</li>
          <li>{findObject?.strMeasure13 ?? ""}</li>
          <li>{findObject?.strMeasure14 ?? ""}</li>
          <li>{findObject?.strMeasure15 ?? ""}</li>
          <li>{findObject?.strMeasure16 ?? ""}</li>
          <li>{findObject?.strMeasure17 ?? ""}</li>
          <li>{findObject?.strMeasure18 ?? ""}</li>
          <li>{findObject?.strMeasure19 ?? ""}</li>
          <li>{findObject?.strMeasure20 ?? ""}</li>
        </ol>

        <div>
          <LinkVideo
            to={findObject?.strYoutube ?? "Google.com"}
            target="_blank"
          >
            YouTube
          </LinkVideo>
          <LinkFonte to={findObject?.strSource ?? "Google.com"} target="_blank">
            Fonte Original
          </LinkFonte>
        </div>
      </PageContent>
    </div>
  );
};
