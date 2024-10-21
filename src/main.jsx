import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Contact from "./pages/Contact/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import AboutPage from "./pages/About us/AboutPage.jsx";
import Services from "./pages/Services/Services.jsx";
import Properties from "./pages/Properties/Properties.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
