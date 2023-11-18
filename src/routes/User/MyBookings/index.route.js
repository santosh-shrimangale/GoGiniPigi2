import { MyBookings } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.MY_BOOKINGS.path,
      name: t("text.myBookings.title"),
      key: routesMap.MY_BOOKINGS.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon: "/profile/upcoming-booking.svg",
      element: <MyBookings />,
    },
  ];
}
