import { Home } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.HOME.path,
      name: t("text.home.title"),
      key: routesMap.HOME.path,
      commonRoute: true,
      private: false,
      belongsToHeader: true,
      element: <Home />,
    },
  ];
}
