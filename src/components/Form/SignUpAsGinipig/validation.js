import i18next from "i18next";
import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    firstName: yup
      .string()
      .required(i18next.t("validation.signUpAsGinipig.firstName")),
    lastName: yup
      .string()
      .required(i18next.t("validation.signUpAsGinipig.lastName")),
    phoneNumber: yup
      .number()
      .required(i18next.t("validation.signUpAsGinipig.mobileNumber")),
    password: yup
      .string()
      .min(6, i18next.t("validation.login.validPassword"))
      .max(8, i18next.t("validation.login.validPassword"))
      .required(i18next.t("validation.signUpAsGinipig.password")),
    confirmPassword: yup
      .string()
      .required(i18next.t("validation.signUpAsGinipig.confirmPassword"))
      .oneOf(
        [yup.ref("password")],
        i18next.t("validation.signUpAsGinipig.match")
      ),
    email: yup
      .string()
      .required(i18next.t("validation.signUpAsGinipig.email"))
      .email(i18next.t("validation.signUpAsGinipig.email")),
    // profileImage: yup.string(),
    image: yup.string(),
  });
}
