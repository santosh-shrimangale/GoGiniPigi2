import i18next from "i18next";
import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    new_password: yup
      .string()
      .min(6, i18next.t("validation.login.validPassword"))
      .max(8, i18next.t("validation.login.validPassword"))
      .required(i18next.t("validation.resetPassword.newpassword")),
    confirm_password: yup
      .string()
      .required(i18next.t("validation.resetPassword.confirmpassword"))
      .min(6)
      .max(8)
      .oneOf(
        [yup.ref("new_password"), null],
        `${i18next.t("validation.resetPassword.matchpassword")}`
      ),
  });
}
