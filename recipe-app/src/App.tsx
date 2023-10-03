import { HomePage } from "./pages/home";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchName } from "./pages/searchName";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/searchName",
    element: <SearchName />,
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
