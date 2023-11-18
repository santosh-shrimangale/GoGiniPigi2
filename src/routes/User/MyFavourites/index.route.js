import { MyFavourites } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.MY_FAVOURITES.path,
      name: t("text.myFavourites.title"),
      key: routesMap.MY_FAVOURITES.path,
      commonRoute: false,
      private: true,
      belongsToSidebar: true,
      icon: routesMap.MY_FAVOURITES.icon,
      element: <MyFavourites />,
    },
  ];
}
