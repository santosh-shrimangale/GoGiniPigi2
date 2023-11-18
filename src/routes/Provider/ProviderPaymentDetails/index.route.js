import { ProviderPaymentDetails } from "../../../pages";
import routesMap from "../../../routeControl/providerRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.PROVIDER_PAYMENT_DETAILS.path,
      name: t("text.providerPaymentDetails.title"),
      key: routesMap.PROVIDER_PAYMENT_DETAILS.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon: routesMap.PROVIDER_PAYMENT_DETAILS.icon,
      element: <ProviderPaymentDetails />,
    },
  ];
}
