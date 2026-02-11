import { createBrowserRouter } from "react-router";
import AllMovies from "../Pages/AllMovies/AllMovies";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Home from "../Pages/Home/Home";
import MyCollection from "../Pages/MyCollection/MyCollection";
import RootLayout from "../RootLayout/RootLayout";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <AllMovies /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      {
        path: "my-collection",
        element: (
          <PrivateRoute>
            <MyCollection />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "movie-details/:id",
      //   element: <MovieDetails />,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:3000/movies/${params.id}`),
      // },
    ],
  },
]);
