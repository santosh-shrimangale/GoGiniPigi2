import { Ginipigs } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.GINIPIGS.path,
      name: t("text.ginipigs.pageTitle"),
      key: routesMap.GINIPIGS.path,
      commonRoute: true,
      private: false,
      belongsToHeader: false,
      element: <Ginipigs />,
    },
  ];
}
