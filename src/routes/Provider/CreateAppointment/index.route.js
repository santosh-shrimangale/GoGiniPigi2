import { CreateAppointment } from "../../../pages";

import providerRouteMap from "../../../routeControl/providerRouteMap";

export default function route(t) {
  return [
    {
      path: providerRouteMap.CREATE_APPOINTMENT.path,
      name: t("text.createAppointment.title"),
      key: providerRouteMap.CREATE_APPOINTMENT.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon: providerRouteMap.CREATE_APPOINTMENT.icon,
      element: <CreateAppointment />,
    },
  ];
}
