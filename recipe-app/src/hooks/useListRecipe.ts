import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { iCard } from "../components/Card/types";

const useListRecipe = () => {
  const [data, setData] = useState<iCard[]>([]);

  const fetchData = useCallback(() => {
    for (let i = 0; i < 6; i++) {
      console.log(i);
      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => {
          setData((prevState) => [...prevState, res.data.meals[0]]);
        })
        .catch(console.error);
    }
  }, []);

  useEffect(() => {
    if (!data.length) fetchData();
  }, [fetchData]);

  return { data };
};

export default useListRecipe;
