import { useRoutes } from "react-router";
import { routes } from "./config/routes";

export const App = () => {
  const appRoutes = useRoutes(routes);
  return appRoutes;
};
