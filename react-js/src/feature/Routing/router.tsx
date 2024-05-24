import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('../Home/Home'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "*",
    element: <Navigate to="/"/>
  },
  
]);

export default router;