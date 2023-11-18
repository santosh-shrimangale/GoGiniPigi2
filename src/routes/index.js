import { useTranslation } from "react-i18next";
import { AuthLayout, MainLayout } from "../layouts";
import { userRoutes } from "./User";
import authRoutes from "./auth.route";
import { providerRoutes } from "./Provider";

export const routes = () => {
  const { t } = useTranslation();
  return [
    {
      element: <AuthLayout />,
      children: [...authRoutes(t)],
    },
    {
      element: <MainLayout />,
      children: [...userRoutes(t), ...providerRoutes(t)],
    },
  ];
};

export const routesList = () => {
  const { t } = useTranslation();
  let routeArr = [
    ...authRoutes(t),
    ...userRoutes(t)[0].children,
    ...userRoutes(t)[1].children,
    ...providerRoutes(t)[0].children,
    ...providerRoutes(t)[1].children,
  ];
  return [...routeArr];
};

export const moduleRoutesList = () => {
  const { t } = useTranslation();
  let routeArr = {
    user: [...userRoutes(t)[0].children, ...userRoutes(t)[1].children],
    provider: [
      ...providerRoutes(t)[0].children,
      ...providerRoutes(t)[1].children,
    ],
  };
  return routeArr;
};

export const getCompletePathList = () => {
  return routesList().reduce((prev, curr) => {
    prev.push(curr);
    if (curr.children) {
      prev.push(...curr.children);
    }
    return prev;
  }, []);
};
