import { ProviderReview } from "../../../pages";
import providerRouteMap from "../../../routeControl/providerRouteMap";

export default function route(t) {
  return [
    {
      path: providerRouteMap.PROVIDER_REVIEW.path,
      name: t("text.providerReview.title"),
      key: providerRouteMap.PROVIDER_REVIEW.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: false,
      element: <ProviderReview />,
    },
  ];
}
