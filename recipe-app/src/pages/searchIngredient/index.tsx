import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { CardsContainer, PageContent, Title, SearchBar } from "./styles";
import axios from "axios";
import { IngredientCard } from "../../components/IngredientCard";

interface iSearchIngredient {
  meals: {
    strIngredient: string;
    idIngredient: string;
  }[];
}

export const SearchIngredient = () => {
  const [data, setData] = useState<iSearchIngredient["meals"]>();
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      .then((res) => {
        setData(res.data.meals);
      })
      .catch(console.error);
  }, []);

  const filteredData = data?.filter((item) =>
    item.strIngredient.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Header />
      <PageContent>
        <Title>Ingredientes</Title>
        <SearchBar
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Pesquisar ingrediente"
          type="text"
        />
        <CardsContainer>
          {filter.length > 0 ? (
            <>
              {filteredData?.map((item) => (
                <IngredientCard
                  key={item.idIngredient}
                  name={item.strIngredient}
                />
              ))}
            </>
          ) : (
            <>
              {data?.map((item) => (
                <IngredientCard
                  key={item.idIngredient}
                  name={item.strIngredient}
                />
              ))}
            </>
          )}
        </CardsContainer>
      </PageContent>
    </div>
  );
};
