import { OurStory } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.OUR_STORY.path,
      name: t("text.ourStory.title"),
      key: routesMap.OUR_STORY.path,
      commonRoute: true,
      private: false,
      belongsToHeader: true,
      element: <OurStory />,
    },
  ];
}
