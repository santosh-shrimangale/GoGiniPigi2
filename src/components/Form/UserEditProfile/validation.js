import i18next from "i18next";
import * as yup from "yup";

export default function validation(disabledField) {
  return yup.object().shape({
    first_name: yup
      .string()
      .concat(
        !disabledField
          ? yup.string().required(i18next.t("validation.profile.firstName"))
          : ""
      ),
    last_name: yup
      .string()
      .concat(
        !disabledField
          ? yup.string().required(i18next.t("validation.profile.firstName"))
          : ""
      ),
    gender: yup
      .string()
      .concat(
        !disabledField
          ? yup.string().required(i18next.t("validation.profile.gender"))
          : ""
      ),
    phone_number: yup
      .string()
      .concat(
        !disabledField
          ? yup.string().required(i18next.t("validation.profile.mobile"))
          : ""
      ),

    email: yup
      .string()
      .concat(
        !disabledField
          ? yup.string().required(i18next.t("validation.profile.email"))
          : ""
      ),
  });
}
