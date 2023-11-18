import { Blog } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.BLOG.path,
      name: t("text.blog.title"),
      key: routesMap.BLOG.path,
      commonRoute: true,
      private: false,
      belongsToHeader: true,
      element: <Blog />,
    },
  ];
}
