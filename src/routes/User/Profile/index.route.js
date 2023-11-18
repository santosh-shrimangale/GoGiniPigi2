import { Profile } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.PROFILE.path,
      name: t("text.myProfile.pageTitle"),
      key: routesMap.PROFILE.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon: routesMap.PROFILE.icon,
      element: <Profile />,
    },
  ];
}
