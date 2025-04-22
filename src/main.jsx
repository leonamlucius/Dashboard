import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import StatisticsPages from "./pages/StatisticsPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";

const router = createBrowserRouter([
  {
    path: "/Dashboard" ,
    element: <App/>,
  },
  {
    path: "/" ,
    element: <App/>,
  },
  {
    path: "Statistics",
    element: <StatisticsPages/>,
  },
  {
    path: "Users",
    element: <UsersPage/>,
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
