import { BookingRequest } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.BOOKING_REQUEST.path,
      name: t("text.bookingRequest.title"),
      key: routesMap.BOOKING_REQUEST.path,
      commonRoute: true,
      private: false,
      belongsToHeader: false,
      element: <BookingRequest />,
    },
  ];
}
