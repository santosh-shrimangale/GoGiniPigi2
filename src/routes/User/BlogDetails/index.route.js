import { BlogDetails } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: `${routesMap.BLOG_DETAILS.path}/:id`,
      name: t("text.blogDetails.title"),
      key: routesMap.BLOG_DETAILS.path,
      commonRoute: true,
      private: false,
      belongsToHeader: false,
      element: <BlogDetails />,
    },
  ];
}
