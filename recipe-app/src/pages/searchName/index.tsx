import React, { useEffect } from "react";
import { Header } from "../../components/Header/index.js";
import { useState } from "react";
import Card, { iCard } from "../../components/Card/index.js";
import { iMeals } from "../../components/Card/index.js";
import { Title, PageContent, SearchBar } from "./styles";
import axios from "axios";

export const SearchName = () => {
  const [message, setMessage] = useState<string>("");
  const [data, setData] = useState<iCard[]>([]);

  const handleKeyDown = (event: any) => {
    console.log("Key pressed: ", event.key);

    if (event.key === "Enter") {
      event.preventDefault();
      fetchData();
      console.log("Current input: ", message);
    }
  };

  const fetchData = () => {
    if (message) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${message}`)
        .then((res) => {
          console.log("printando res: ", res);
          setData(res.data.meals);
        })
        .catch(console.error);
    } else {
      setData([]);
    }
  };

  // useEffect(() => {
  //   if (message) {
  //     axios
  //       .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${message}`)
  //       .then((res) => {
  //         console.log("printando res: ", res);
  //         setData(res.data.meals);
  //       })
  //       .catch(console.error);
  //   } else {
  //     setData([]);
  //   }
  // }, [data, message]);

  console.log("Current input: ", message);

  console.log(data);
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
