import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";
import { RootPage } from "./pages";
import HomePage from "./pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
