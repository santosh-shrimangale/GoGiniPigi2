import { PaymentOption } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.PAYMENT_OPTION.path,
      name: t("text.paymentOption.title"),
      key: routesMap.PAYMENT_OPTION.path,
      commonRoute: true,
      private: false,
      belongsToHeader: false,
      element: <PaymentOption />,
    },
  ];
}
