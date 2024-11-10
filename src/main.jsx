import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";   
import "./index.css";
import HomePage from "./components/HomePage.jsx";
import ProductPage from "./components/ProductPage.jsx";
import ProductListingPage from "./components/ProductListingPage.jsx";
import ContactUsPage from "./components/ContactUsPage.jsx";
import MyAccountPage from "./components/MyAccountPage.jsx";
import CheckoutPage from './components/CheckoutPage.jsx';
import CheckoutDetailsPage from "./components/CheckoutDetailsPage.jsx";
import OrderCompletePage from "./components/OrderCompletePage.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/home-page",
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
  {
    path: "/account",
    element: <MyAccountPage />, 
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/checkout-details",
    element: <CheckoutDetailsPage/>,
  },
  {
    path: "/order-complete",
    element: <OrderCompletePage/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);