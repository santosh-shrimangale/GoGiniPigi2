import React from "react";

export { default as AppLayout } from "./App/index.layout";
// export {default as MainLayout} from "./Main/index.layout";
// export {default as PublicLayout} from "./Public/index.layout";

// export const AppLayout = Lazy(()=>import("./Auth/index.layout"));
export const MainLayout = React.lazy(() => import("./Main/index.layout"));
export const PublicLayout = React.lazy(() => import("./Public/index.layout"));
export const PrivateLayout = React.lazy(() => import("./Private/index.layout"));
export const AuthLayout = React.lazy(() => import("./Auth/index.layout"));
