import { Settings } from "../../../pages";
import providerRouteMap from "../../../routeControl/providerRouteMap";

export default function route(t) {
  return [
    {
      path: providerRouteMap.SETTINGS.path,
      name: t("text.settings.title"),
      key: providerRouteMap.SETTINGS.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon: providerRouteMap.SETTINGS.icon,
      element: <Settings />,
    },
  ];
}
