import React, { useCallback, useState } from "react";

import { Header } from "../../components/Header/index.js";
import { Title, PageContent, CardContainer, Abutton } from "./styles";
import axios from "axios";
import Card, { iCard } from "../../components/Card/index.js";

export const SearchFirstLetter = () => {
  const [data, setData] = useState<iCard[]>([]);
  const [currentLetter, setCurrentLetter] = useState<string>("");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const fetchData = (item: string) => {
    setCurrentLetter(item);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${item}`)
      .then((res) => {
        setData(res.data.meals);
      })
      .catch(console.error);
  };

  return (
    <div>
      <Header />
      <PageContent>
        <Title>Receitas por Letra</Title>
        {alphabet.map((item) => (
          <Abutton
            active={item === currentLetter}
            type="button"
            key={item}
            onClick={() => fetchData(item)}
          >
            {item}
          </Abutton>
        ))}
        <CardContainer>
          <Card meals={data} />
        </CardContainer>
      </PageContent>
    </div>
  );
};
