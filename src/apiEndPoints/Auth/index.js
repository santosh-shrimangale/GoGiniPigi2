const Auth = {
  login: {
    url: "/login",
    method: "POST",
  },
  providerProfileStepOne: {
    url: "/service-provider/register/step-1",
    method: "POST",
  },
  providerProfileStepTwo: {
    url: "/service-provider/register/step-2",
    method: "POST",
  },
  providerProfileStepThree: {
    url: "/service-provider/register/step-3",
    method: "POST",
  },
  userRegister: {
    url: "/user/register",
    method: "POST",
  },
  providerRegister: {
    url: "/service-provider/register",
    method: "POST",
  },
  forgetPassword: {
    url: "/send-otp",
    method: "POST",
  },
  verifyOtp: {
    url: "/verify-otp",
    method: "POST",
  },
  resetPassword: {
    url: "/reset-password",
    method: "POST",
  },
  logout: {
    url: "/logout",
    method: "POST",
  },
};
export default Auth;
