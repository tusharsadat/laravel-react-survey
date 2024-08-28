import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Survey from "./views/Survey";
import Login from "./views/Login";
import Signup from "./views/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/survey",
    element: <Survey />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
]);
export default router;
