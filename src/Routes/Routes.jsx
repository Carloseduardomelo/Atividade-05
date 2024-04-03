import { createBrowserRouter } from "react-router-dom";
import Home from "../pags/Home/Home";
import FrontEnd from "../pags/Front-End/Front-End";
import BackEnd from "../pags/Back-End/Back-End";
import Mobile from "../pags/Mobile/Mobile";
import FullStack from "../pags/FullStack/FullStack";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/FrontEnd",
    element: <FrontEnd />
  },
  {
    path: "BackEnd",
    element: <BackEnd />
  },
  {
    path: "/Mobile",
    element: <Mobile />
  },
  {
    path: "/FullStack",
    element: <FullStack />
  },
  {
    path: "*",
    element: <h1>Página não encontrada.</h1>
  }
])