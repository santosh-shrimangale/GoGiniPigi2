import { PrivacyPolicy } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.PRIVACY_POLICY.path,
      name: t("text.privacyPolicy.title"),
      key: routesMap.PRIVACY_POLICY.path,
      commonRoute: true,
      private: false,
      belongsToHeader: false,
      element: <PrivacyPolicy />,
    },
  ];
}
