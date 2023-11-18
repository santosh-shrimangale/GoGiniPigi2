import i18next from "i18next";
import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    otp: yup
      .string()
      .length(4, i18next.t("validation.verification.maxCharacter"))
      .required(i18next.t("validation.verification.required")),
  });
}
