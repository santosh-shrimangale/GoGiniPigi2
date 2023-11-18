import providerRoutes from "./Provider";

import userRoutes from "./User";

const moduleRoutesMap = {
  user: { ...userRoutes },
  provider: { ...providerRoutes },
};
export default moduleRoutesMap;
