// import React, { useEffect } from "react";
import { Header } from "../../components/Header/index.js";
import { useState } from "react";
import { iCard } from "../../components/Card/types.js";
import { Title, PageContent, SearchBar } from "./styles";
import axios from "axios";
import Card from "../../components/Card/index.js";

export const SearchName = () => {
  const [message, setMessage] = useState<string>("");
  const [data, setData] = useState<iCard[]>([]);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchData();
    }
  };

  const fetchData = () => {
    if (message) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${message}`)
        .then((res) => {
          setData(res.data.meals);
        })
        .catch(console.error);
    } else {
      setData([]);
    }
  };

  return (
    <div>
      <Header></Header>
      <PageContent>
        <Title>Search By Name</Title>
        <SearchBar
          type="text"
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Meal Name"
        />
        {data ? <Card meals={data} /> : <h2>Receita não encontrada</h2>}
      </PageContent>
    </div>
  );
};
