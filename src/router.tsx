import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
]);
