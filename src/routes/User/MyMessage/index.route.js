import { MyMessage } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.MY_MESSAGE.path,
      name: t("text.myMessage.title"),
      key: routesMap.MY_MESSAGE.path,
      commonRoute: false,
      private: true,
      //   belongsToSidebar: true,
      element: <MyMessage />,
    },
  ];
}
