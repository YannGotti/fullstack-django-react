import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import StreamerPage from "./pages/StreamerPage/StreamerPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/streamer/:streamer",
    element: <StreamerPage />,
    errorElement: <StreamerPage />,
  },
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
