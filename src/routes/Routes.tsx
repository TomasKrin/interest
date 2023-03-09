import { Route, Routes as RoutesWrapper } from "react-router-dom";

import { mainLayoutRoutes } from "./consts";

const Routes = () => {
  const { routes } = mainLayoutRoutes;
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
