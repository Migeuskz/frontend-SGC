import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Layouts/Login";
import { Home } from "./Layouts/Home";
import { LoginForm } from "./Pages/LoginForm";
import { Formularios } from "./Pages/Formularios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home/>,
    children: [
        {
            path: '/home/formularios',
            element: <Formularios/>
        }
    ]

  }
]);

export default router;
