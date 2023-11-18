import React from "react";

export const Login = React.lazy(() => import("./Login/index.page"));
export const ForgetPassword = React.lazy(() =>
  import("./ForgetPassword/index.page")
);
export const ResetPassword = React.lazy(() =>
  import("./ResetPassword/index.page")
);
export const ProfileProvider = React.lazy(() =>
  import("./ProfileProvider/index.page")
);
export const Verification = React.lazy(() =>
  import("./Verification/index.page")
);
export const SignUpAsProvider = React.lazy(() =>
  import("./SignUpAsProvider/index.page")
);
export const SignUpAsGinipig = React.lazy(() =>
  import("./SignUpAsGinipig/index.page")
);
