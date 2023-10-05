import { HomePage } from "./pages/home";
import { SearchName } from "./pages/searchName";
import { SearchFirstLetter } from "./pages/searchFirstLetter";
import { SearchIngredient } from "./pages/searchIngredient";
import { MealsByIngredient } from "./pages/mealsByIngredient";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecipeDetails } from "./pages/recipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/searchName",
    element: <SearchName />,
  },
  {
    path: "/searchFirstLetter",
    element: <SearchFirstLetter />,
  },
  {
    path: "/recipeDetails/:id",
    element: <RecipeDetails />,
  },
  {
    path: "/searchIngredients",
    element: <SearchIngredient />,
  },
  {
    path: "/mealsByIngredient/:name",
    element: <MealsByIngredient />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
