import i18next from "i18next";
import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    card_number: yup
      .number()
      .required(i18next.t("validation.paymentDetails.cardNumber")),
    card_holder: yup
      .string()
      .required(i18next.t("validation.paymentDetails.cardHolder")),
    cvc: yup.number().required(i18next.t("validation.paymentDetails.cvv")),
  });
}
