import Examples from "../pages/Examples/Examples";
import Home from "../pages/Home/Home";
import Pin from "../pages/Pin/Pin";
import { Route } from "./routeTypes";

export const HOME_PATH = "/";
export const PIN_PATH = "/:id";
export const EXAMPLES_PATH = "/examples";

export const routes: Route[] = [
  { path: HOME_PATH, Component: Home },
  { path: PIN_PATH, Component: Pin },
  { path: EXAMPLES_PATH, Component: Examples },
];
