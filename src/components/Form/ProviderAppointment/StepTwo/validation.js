// import i18next from "i18next";
import i18next from "i18next";
import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    treatment: yup
      .string()
      .required(i18next.t("validation.createAppointment.treatment")),
    treatmentTitle: yup
      .string()
      .required(i18next.t("validation.createAppointment.treatmentTitle")),
    treatmentCategories: yup
      .array()
      .min(1, i18next.t("validation.createAppointment.treatmentCategories"))
      .required(),
    description: yup
      .string()
      .required(i18next.t("validation.createAppointment.description")),
    license: yup
      .string()
      .required(i18next.t("validation.createAppointment.license")),
    parkingOnSite: yup
      .string()
      .required(i18next.t("validation.createAppointment.parkingOnSite")),
    disabilityAccess: yup
      .string()
      .required(i18next.t("validation.createAppointment.disabilityAccess")),
    preference: yup
      .string()
      .required(i18next.t("validation.createAppointment.preference")),
    bio: yup.string().required(i18next.t("validation.createAppointment.bio")),
    uploadImage: yup
      .string()
      .required(i18next.t("validation.createAppointment.uploadImage")),
  });
}
