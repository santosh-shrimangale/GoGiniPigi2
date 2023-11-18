import { ProviderLeaveReview } from "../../../pages";
import routesMap from "../../../routeControl/providerRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.PROVIDER_LEAVE_REVIEW.path,
      name: t("text.providerLeaveReview.title"),
      key: routesMap.PROVIDER_LEAVE_REVIEW.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: false,

      element: <ProviderLeaveReview />,
    },
  ];
}
