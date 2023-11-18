import { ProviderMyBooking } from "../../../pages";

import providerRouteMap from "../../../routeControl/providerRouteMap";

export default function route(t) {
  return [
    {
      path: providerRouteMap.PROVIDER_MY_BOOKINGS.path,
      name: t("text.myBookings.title"),
      key: providerRouteMap.PROVIDER_MY_BOOKINGS.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon: providerRouteMap.PROVIDER_MY_BOOKINGS.icon,
      element: <ProviderMyBooking />,
    },
  ];
}
