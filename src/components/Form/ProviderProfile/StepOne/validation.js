// import i18next from "i18next";
import i18next from "i18next";
import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    postcode: yup
      .string()
      .required(i18next.t("validation.profileProvider.postCode")),
    building: yup
      .string()
      .required(i18next.t("validation.profileProvider.flatBuildingNo")),
    street: yup
      .string()
      .required(i18next.t("validation.profileProvider.streetName")),
    city: yup
      .string()
      .required(i18next.t("validation.profileProvider.cityTownName")),
    company_name_show_on_profile: yup
      .number()
      .required(i18next.t("validation.profileProvider.showCompanyName")),
    mobile: yup
      .string()
      .required(i18next.t("validation.profileProvider.mobileNumber"))
      .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, {
        message: i18next.t("validation.profileProvider.numberType"),
        excludeEmptyString: false,
      }),
  });
}
