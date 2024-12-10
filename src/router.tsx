import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Layouts/Login";
import { Home } from "./Layouts/Home";
import { LoginForm } from "./Pages/LoginForm";
import { Formularios } from "./Pages/Formularios";
import { Graficas } from "./Pages/Graficas";
import { GraficaComponent } from "./Components/Graficas";
import { TablaPDF } from "./Components/TablaPDF";

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
            path: '/graficas/tabla',
            element: <TablaPDF/>
        }
    ]
  }

]);

export default router;
