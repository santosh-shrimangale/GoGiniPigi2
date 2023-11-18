import { PrivateLayout, PublicLayout } from "../../layouts";
import privateRoutes from "./private.route";
import publicRoutes from "./public.route";

export const providerRoutes = (t) => {
  return [
    {
      element: <PublicLayout />,
      children: [...publicRoutes(t)],
    },
    {
      element: <PrivateLayout />,
      children: [...privateRoutes(t)],
    },
  ];
};
