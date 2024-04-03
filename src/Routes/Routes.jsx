import { createBrowserRouter } from "react-router-dom";
import Home from "../pags/Home/Home";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])