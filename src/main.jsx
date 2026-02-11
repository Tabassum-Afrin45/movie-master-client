import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./RootLayout/RootLayout.jsx";
import Home from "./Components/Home/Home.jsx";
import AllMovies from "./Components/AllMovies/AllMovies.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import MyCollection from "./Components/MyCollection/MyCollection.jsx";
import MovieDetails from "./Components/MovieDetails/MovieDetails.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "allMovies", element: <AllMovies /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      {
        path: "myCollection",
        element: (
          <PrivateRoute>
            <MyCollection />
          </PrivateRoute>
        ),
      },
      {
        path: "movieDetails/:id",
        element: <MovieDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movies/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
