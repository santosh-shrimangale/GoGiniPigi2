import i18next from "i18next";
import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    password: yup
      .string()
      .required(i18next.t("validation.login.password"))
      .min(6, i18next.t("validation.login.validPassword"))
      .max(8, i18next.t("validation.login.validPassword")),
    email: yup.string().required(i18next.t("validation.login.email")),
  });
}
