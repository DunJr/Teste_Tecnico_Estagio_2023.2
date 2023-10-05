import { Header } from "../../components/Header";
import React, { useEffect, useState } from "react";
import { PageContent, Title } from "./styles";
import { useParams } from "react-router-dom";
import { iCard } from "../../components/Card/types.ts";
import axios from "axios";
import Card from "../../components/Card/index.tsx";

export const MealsByIngredient = () => {
  const params = useParams();
  const [data, setData] = useState<iCard[]>();

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`
      )
      .then((res) => {
        setData(res.data.meals);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <Header />
      <PageContent>
        <Title>{`Receitas com ${params.name}`}</Title>
        <Card meals={data} />
      </PageContent>
    </div>
  );
};
