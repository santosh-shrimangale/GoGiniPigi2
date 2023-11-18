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
    working: yup
      .string()
      .required(i18next.t("validation.signUpAsProvider.working")),
    companyName: yup
      .string()
      .required(i18next.t("validation.signUpAsProvider.companyName")),
    password: yup
      .string()
      .min(6, i18next.t("validation.login.validPassword"))
      .max(8, i18next.t("validation.login.validPassword"))
      .required(i18next.t("validation.signUpAsProvider.password")),
    confirmPassword: yup
      .string()
      .required(i18next.t("validation.signUpAsProvider.confirmPassword"))
      .oneOf(
        [yup.ref("password")],
        i18next.t("validation.signUpAsProvider.match")
      ),
    email: yup
      .string()
      .required(i18next.t("validation.signUpAsProvider.email")),
    // .email(i18next.t("validation.signUpAsGinipig.email")),
    image: yup.string(),
  });
}
