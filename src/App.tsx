import React, { createContext, useState } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom"; // import createHashRouter from react-router-dom
import Home from "./Pages/Home";
import "./App.css";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import { Helmet } from "react-helmet";
import { TbSquareLetterM } from "react-icons/tb";
import { renderToString } from "react-dom/server";
import AboutPage from "./Pages/AboutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ThemeContext = createContext<any>(null);

const App = () => {
  const [theme, setTheme] = useState("dark");
  // Create a styled icon with white fill color
  const StyledCartIcon = () => (
    <TbSquareLetterM size={25} style={{ color: "#2CBCE9" }} />
  );

  // Convert the styled icon to a base64 string
  const cartIconString = renderToString(<StyledCartIcon />);
  const cartIconBase64 = btoa(cartIconString);

  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  const router = createHashRouter([
    {
      path: "*",
      element: <Home />,
    },
    // {
    //   path: "/projects",
    //   element: <Projects />,
    // },
    // {
    //   path: "/about",
    //   element: <AboutPage />,
    // },

    // {
    //   path: "/contact",
    //   element: <Contact />,
    // },
    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // },
  ]);

  return (
    <>
      <Helmet>
        <title>Monsoon</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`data:image/svg+xml;base64,${cartIconBase64}`}
        />

        <meta name="description" content="This is a description" />
      </Helmet>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ToastContainer className="text-center" />
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
