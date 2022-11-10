import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import AddService from "../../Pages/Services/AddService";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://justica-law-server.vercel.app/dataLimit"),
        element: <Home />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "services",
        loader: () => fetch("https://justica-law-server.vercel.app/data"),
        element: <Services />,
      },
      {
        path: "add_services",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "services/:id",
        loader: ({ params }) =>
          fetch(`https://justica-law-server.vercel.app/data/${params.id}`),
        element: <ServiceDetails />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "my_review",
        element: <MyReviews />,
      },
    ],
  },
]);

export default router;
