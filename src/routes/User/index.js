import { PrivateLayout, PublicLayout } from "../../layouts";
import publicRoutes from "./public.route";
import privateRoutes from "./private.route";

export const userRoutes = (t) => {
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
