import { ProviderProfile } from "../../../pages";
import providerRouteMap from "../../../routeControl/providerRouteMap";

export default function route(t) {
  return [
    {
      path: providerRouteMap.PROFILE.path,
      name: t("text.myProfile.pageTitle"),
      key: providerRouteMap.PROFILE.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon: providerRouteMap.PROFILE.icon,
      element: <ProviderProfile />,
    },
  ];
}
