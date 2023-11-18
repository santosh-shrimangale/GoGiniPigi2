import i18next from "i18next";
import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    hours: yup
      .string()
      .required(i18next.t("validation.createAppointment.hours")),
    minute: yup
      .string()
      .required(i18next.t("validation.createAppointment.minute")),
    portfolio: yup
      .string()
      .required(i18next.t("validation.createAppointment.portfolio")),
    levelExpertise: yup
      .string()
      .required(i18next.t("validation.createAppointment.levelExpertise")),
    rrp: yup
      .number()
      .typeError(i18next.t("validation.createAppointment.priceType"))
      .required(i18next.t("validation.createAppointment.rrp")),
    yourPrice: yup
      .number()
      .typeError(i18next.t("validation.createAppointment.priceType"))
      .required(i18next.t("validation.createAppointment.yourPrice")),
  });
}
