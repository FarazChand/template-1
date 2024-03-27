import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";
import { RootPage } from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [{}],
    },
  ]);

  return <div>App</div>;
};

export default App;
