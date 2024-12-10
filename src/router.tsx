import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Layouts/Login";
import { Home } from "./Layouts/Home";
import { LoginForm } from "./Pages/LoginForm";
import { Formularios } from "./Pages/Formularios";
import { Graficas } from "./Pages/Graficas";
import { GraficaComponent } from "./Components/Graficas";

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
},
{
    path: '/formularios',
    element: <Formularios/>,

  },
  {
    path: "/graficas",
    element: <Graficas/>,
    children: [
        {
            path: '/graficas/graficaPDF',
            element: <GraficaComponent/>
        }
    ]
  }

]);

export default router;
