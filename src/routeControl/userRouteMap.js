import userPage from "./User";
import authRoutes from "./Auth";

const routesMap = {
  ...userPage,
  ...authRoutes,
};
export default routesMap;
