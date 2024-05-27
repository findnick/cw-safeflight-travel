import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CarRental from "./Pages/CarRental";
import Flight from "./Pages/Flight";
import Hotel from "./Pages/Hotel";
import Landing from "./Pages/Landing";

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/flight",
    element: <Flight />,
  },
  {
    path: "/hotel",
    element: <Hotel />,
  },
  {
    path: "/car-rental",
    element: <CarRental />,
  },
  {
    path: "/carrental",
    element: <CarRental />,
  },
  {
    path: "/rent-a-car",
    element: <CarRental />,
  },
  {
    path: "/rentacar",
    element: <CarRental />,
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
