type Route = {
  path: "/" | "/:id" | "/examples";
  Component: () => JSX.Element;
};

export type MainLayoutRoutes = {
  routes: Route[];
};
