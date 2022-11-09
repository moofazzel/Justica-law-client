import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/dataLimit"),
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
        loader: () => fetch("http://localhost:5000/data"),
        element: (
          <PrivateRoutes>
            <Services />
          </PrivateRoutes>
        ),
      },
      {
        path: "services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/data/${params.id}`),
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
