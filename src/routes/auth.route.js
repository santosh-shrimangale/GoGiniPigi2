import {
  ForgetPassword,
  Login,
  ProfileProvider,
  ResetPassword,
  SignUpAsGinipig,
  SignUpAsProvider,
  Verification,
} from "../pages";
import providerRouteMap from "../routeControl/providerRouteMap";
import routesMap from "../routeControl/userRouteMap";

export default function route(t) {
  return [
    {
      path: routesMap.LOGIN.path,
      name: t("text.common.login"),
      key: routesMap.LOGIN.path,
      commonRoute: false,
      private: false,
      belongsToHeader: false,
      element: <Login />,
    },
    {
      path: routesMap.FORGET_PASSWORD.path,
      name: t("text.forgotPassword.title"),
      key: routesMap.FORGET_PASSWORD.path,
      commonRoute: false,
      private: false,
      belongsToHeader: false,
      element: <ForgetPassword />,
    },
    {
      path: routesMap.SIGNUP_AS_GINIPIG.path,
      name: t("text.signUpAsGinipig.title"),
      key: routesMap.SIGNUP_AS_GINIPIG.path,
      commonRoute: false,
      private: false,
      belongsToHeader: false,
      element: <SignUpAsGinipig />,
    },
    {
      path: routesMap.RESET_PASSWORD.path,
      name: t("text.forgetpassword.title"),
      key: routesMap.RESET_PASSWORD.path,
      commonRoute: false,
      private: false,
      belongsToHeader: false,
      element: <ResetPassword />,
    },
    {
      path: providerRouteMap.PROVIDER_PROFILE.path,
      name: t("text.profileProvider.title"),
      key: providerRouteMap.PROVIDER_PROFILE.path,
      commonRoute: false,
      private: false,
      belongsToHeader: false,
      element: <ProfileProvider />,
    },
    {
      path: routesMap.VERIFICATION.path,
      name: t("text.verification.title"),
      key: routesMap.VERIFICATION.path,
      commonRoute: false,
      private: false,
      belongsToHeader: false,
      element: <Verification />,
    },
    {
      path: routesMap.SIGNUP_AS_PROVIDER.path,
      name: t("text.signUpAsProvider.title"),
      key: routesMap.SIGNUP_AS_PROVIDER.path,
      commonRoute: false,
      private: false,
      belongsToHeader: false,
      element: <SignUpAsProvider />,
    },
  ];
}
