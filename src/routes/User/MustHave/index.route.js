import { MustHave } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.MUST_HAVE.path,
      name: t("text.mustHave.title"),
      key: routesMap.MUST_HAVE.path,
      commonRoute: true,
      private: false,
      belongsToHeader: false,
      element: <MustHave />,
    },
  ];
}
