import { TermsAndCondition } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.TERMS_AND_CONDITION.path,
      name: t("text.termsAndCondition.title"),
      key: routesMap.PRIVACY_POLICY.path,
      commonRoute: true,
      private: false,
      belongsToHeader: false,
      element: <TermsAndCondition />,
    },
  ];
}
