import { PropsWithChildren } from "react";

type Route = {
  path: "/" | "/:id" | "/examples";
  Component: () => JSX.Element;
};

export type MainLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: Route[];
};
