import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";   

import "./index.css";

import HomePage from "./components/HomePage.jsx";
import ProductPage from "./components/ProductPage.jsx";
import ProductListingPage from "./components/ProductListingPage.jsx";
import ContactUsPage from "./components/ContactUsPage.jsx";

const router = createBrowserRouter([
  // Route config for root path ("/")
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products/:productId",
    element: <ProductPage />,
  },
  {
    path: "/products/category/:category",
    element: <ProductListingPage />,
  },
  {
    path: "/contact-us",
    element: <ContactUsPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);