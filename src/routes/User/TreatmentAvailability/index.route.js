import { TreatmentAvailability } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.TREATMENT_AVAILABILITY.path,
      name: t("text.treatmentAvailability.title"),
      key: routesMap.TREATMENT_AVAILABILITY.path,
      commonRoute: true,
      private: false,
      belongsToHeader: false,
      element: <TreatmentAvailability />,
    },
  ];
}
