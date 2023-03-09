export type Route = {
  path: "/" | "/:id" | "/examples";
  Component: () => JSX.Element;
};
