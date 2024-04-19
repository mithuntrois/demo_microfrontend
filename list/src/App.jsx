import React from "react";
import ReactDOM from "react-dom";

import { StoreProvider } from "store/store";
import List from "./components/list";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Update from "update/updatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/create",
    element: <Update goHome={() => (window.document.location = "/")} />,
  },
]);

ReactDOM.render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>,
  document.getElementById("app")
);
