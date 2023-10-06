import axios from "axios";
import { iCard } from "components/Card/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  PageContent,
  Title,
  LinkVideo,
  LinkFonte,
  ContainerInfo,
  ContainerLinks,
  RecipeResultImg,
} from "./styles";
import { Header } from "../../components/Header";

export const RecipeDetails = () => {
  const params = useParams();

  const [data, setData] = useState<iCard[]>([]);
  // const [aux, setAux] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.id}`)
      .then((res) => {
        setData(res.data.meals);
      })
      .catch(console.error);
  }, []);

  const findObject = data.find((item) => item.strMeal === params.id);

  const ingredientEntries = Object.entries(findObject ?? {});
  const measureEntries = Object.entries(findObject ?? {});

  const ingredientElements = ingredientEntries.map(([key, value]) => {
    if (key?.includes("strIngredient") && value?.trim() !== "") {
      return <li key={key}>{value}</li>;
    }
  });

  const measureElements = measureEntries.map(([key, value]) => {
    if (key?.includes("strMeasure") && value?.trim() !== "") {
      return <li key={key}>{value}</li>;
    }
  });

  return (
    <div>
      <Header></Header>
      <PageContent>
        <Title>{params.id}</Title>
        <RecipeResultImg src={findObject?.strMealThumb} />

        <p>{`Categoria: ${findObject?.strCategory}`}</p>
        <p>{`Area: ${findObject?.strArea}`}</p>
        <p>{`Tags: ${findObject?.strTags ?? "-"}`}</p>
        <p>{`Instruções: ${findObject?.strInstructions}`}</p>

        <ContainerInfo>
          <h2>Medidas e Ingredientes</h2>
          <div style={{ display: "flex" }}>
            <ol>{measureElements}</ol>
            <ol>{ingredientElements}</ol>
          </div>
        </ContainerInfo>

        <ContainerLinks>
          <LinkVideo
            to={findObject?.strYoutube ?? "Google.com"}
            target="_blank"
          >
            YouTube
          </LinkVideo>
          <LinkFonte to={findObject?.strSource ?? "Google.com"} target="_blank">
            Fonte Original
          </LinkFonte>
        </ContainerLinks>
      </PageContent>
    </div>
  );
};
