import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { iCard } from "../components/Card";

const useListRecipe = () => {
  const [data, setData] = useState<iCard[]>([]);

  const fetchData = useCallback(() => {
    for (let i = 0; i < 6; i++) {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => {
          console.log("Print index: ", i, res);
          setData((prevState) => [...prevState, res.data.meals[0]]);
        })
        .catch(console.error);
    }
  }, []);

  useEffect(() => {
    console.log("Renderizei!");
    fetchData();
  }, [fetchData]);

  return { data };
};

export default useListRecipe;
