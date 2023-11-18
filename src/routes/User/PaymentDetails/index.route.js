import { PaymentDetails } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.PAYMENT_DETAILS.path,
      name: t("text.paymentDetails.title"),
      key: routesMap.PAYMENT_DETAILS.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon: routesMap.PAYMENT_DETAILS.icon,
      element: <PaymentDetails />,
    },
  ];
}
