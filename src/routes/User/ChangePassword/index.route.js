import { ChangePassword } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.CHANGE_PASSWORD.path,
      name: t("text.changePassword.title"),
      key: routesMap.CHANGE_PASSWORD.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon:routesMap.CHANGE_PASSWORD.icon,
      element: <ChangePassword />,
    },
  ];
}
