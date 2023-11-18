import { Faq } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.FAQ.path,
      name: t("text.faq.title"),
      key: routesMap.FAQ.path,
      commonRoute: true,
      private: false,
      belongsToHeader: false,
      element: <Faq />,
    },
  ];
}
