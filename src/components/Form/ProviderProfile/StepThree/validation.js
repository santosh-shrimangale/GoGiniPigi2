import i18next from "i18next";
import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    display_name: yup
      .string()
      .required(i18next.t("validation.profileProvider.profileDisplayName")),
    bio: yup.string().required(i18next.t("validation.profileProvider.bio")),
    image: yup.string().required("Image is required"),
  });
}
