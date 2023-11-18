import { MyService } from "../../../pages";
import routesMap from "../../../routeControl/providerRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.MY_SERVICE.path,
      name: t("text.myService.title"),
      key: routesMap.MY_SERVICE.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon: routesMap.MY_SERVICE.icon,
      element: <MyService />,
    },
  ];
}
