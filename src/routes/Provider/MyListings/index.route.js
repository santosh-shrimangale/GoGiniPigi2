import { ProviderMyListings } from "../../../pages";

import providerRouteMap from "../../../routeControl/providerRouteMap";

export default function route(t) {
  return [
    {
      path: providerRouteMap.MY_LISTINGS.path,
      name: t("text.myListings.title"),
      key: providerRouteMap.MY_LISTINGS.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon: providerRouteMap.MY_LISTINGS.icon,
      element: <ProviderMyListings />,
    },
  ];
}
