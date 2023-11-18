import { PartnerDetail } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.PARTNER_DETAIL.path,
      name: t("text.partnerDetail.title"),
      key: routesMap.PARTNER_DETAIL.path,
      commonRoute: true,
      private: false,
      belongsToHeader: false,
      element: <PartnerDetail />,
    },
  ];
}
