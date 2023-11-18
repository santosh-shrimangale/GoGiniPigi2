import i18next from "i18next";
import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    currentPassword: yup
      .string()
      .required(i18next.t("validation.changePassword.currentPassword")),
    newPassword: yup
      .string()
      .required(i18next.t("validation.changePassword.newPassword")),
    confirmPassword: yup
      .string()
      .required(i18next.t("validation.changePassword.confirmPassword"))
      .oneOf(
        [yup.ref("newPassword")],
        i18next.t("validation.changePassword.match")
      ),
  });
}
