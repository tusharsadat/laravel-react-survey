import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Survey from "./views/Survey";
import Login from "./views/Login";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import SurveyView from "./views/SurveyView";
import Register from "./views/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,

    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/survey",
        element: <Survey />,
      },
      {
        path: "/surveys/create",
        element: <SurveyView />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,

    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
    ],
  },
]);
export default router;
