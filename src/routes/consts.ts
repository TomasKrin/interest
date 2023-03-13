import Examples from "../pages/Examples/Examples";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import { MainLayoutRoutes } from "./routeTypes";
import Pin from "../pages/Pin/Pin";

export const HOME_PATH = "/";
export const PIN_PATH = "/:id";
export const EXAMPLES_PATH = "/examples";

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: PIN_PATH, Component: Pin },
    { path: EXAMPLES_PATH, Component: Examples },
  ],
};
