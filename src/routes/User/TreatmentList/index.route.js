import routesMap from "../../../routeControl/userRouteMap";
import { TreatmentList } from "../../../pages";

export default function route(t) {
  return [
    {
      path: routesMap.HAIR.path,
      name: t("text.common.hair"),
      key: routesMap.HAIR.path,
      commonRoute: true,
      private: false,
      belongsToHeader: true,
      element: <TreatmentList />,
    },
    {
      path: routesMap.BEAUTY.path,
      name: t("text.common.beauty"),
      key: routesMap.BEAUTY.path,
      commonRoute: true,
      private: false,
      belongsToHeader: true,
      element: <TreatmentList />,
    },
    {
      path: routesMap.AESTHETICS.path,
      name: t("text.common.aesthetics"),
      key: routesMap.AESTHETICS.path,
      commonRoute: true,
      private: false,
      belongsToHeader: true,
      element: <TreatmentList />,
    },

    {
      path: routesMap.WELLESS.path,
      name: t("text.common.wellness"),
      key: routesMap.WELLESS.path,
      commonRoute: true,
      private: false,
      belongsToHeader: true,
      element: <TreatmentList />,
    },
  ];
}
