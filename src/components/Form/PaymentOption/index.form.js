/* eslint-disable react/no-unescaped-entities */
import { Form, Formik } from "formik";
import { Input as TextInput } from "../../Antd";
import { CommonButton } from "../../UiElement";

function PaymentOptionForm({ t, onSubmit }) {
  const initialValues = {
    pay: 1,
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <div className="paymentOption">
              <h4 className="font-bd">
                {t("text.paymentOption.bookingDateAndTime")}:{" "}
                <span className="font-rg">{t("text.paymentOption.date")}</span>
              </h4>
              <p>{t("text.paymentOption.booking")}</p>
              {/* <p>
                It’s easy to pay in full now. If you’ve been given the option to
                pay a deposit, the remaining amount can be paid later. Don’t
                worry we’ve made it easy for you, we’ll send you a reminder
                before it’s due
              </p> */}
              <ul className="list-unstyled mb-0">
                <li className="paymentOption_list d-flex">
                  <div className="form-group mb-0">
                    <div className="form-check form-check-inline">
                      <TextInput
                        className="form-check-input"
                        name="pay"
                        type="radio"
                        setFieldValue={props.handleChange}
                        value={1}
                        validation={false}
                        id="full"
                        checked={props.values?.pay === 1 ? true : null}
                      />
                      <label
                        className="form-check-label font-bd mb-0"
                        htmlFor="full"
                      />
                    </div>
                  </div>
                  <div className="txt">
                    <h4 className="font-sm mb-1">
                      {" "}
                      {t("text.paymentOption.payInFull")}
                    </h4>
                    <p>{t("text.paymentOption.payInFullPara")}</p>
                  </div>
                </li>
                <li className="paymentOption_list d-flex">
                  <div className="form-group mb-0">
                    <div className="form-check form-check-inline">
                      <TextInput
                        className="form-check-input"
                        name="pay"
                        type="radio"
                        setFieldValue={props.handleChange}
                        value={0}
                        validation={false}
                        id="deposit"
                        checked={props.values?.pay === 0 ? true : null}
                      />
                      <label
                        className="form-check-label font-bd mb-0"
                        htmlFor="deposit"
                      />
                    </div>
                  </div>
                  <div className="txt">
                    <h4 className="font-sm mb-1">
                      {" "}
                      {t("text.paymentOption.payDeposit")}
                    </h4>
                    <p>{t("text.paymentOption.payDepositPara")}</p>
                  </div>
                </li>
              </ul>
              <hr className="divider" />
              <div className="detailCard_footer d-flex align-items-center justify-content-end">
                <CommonButton
                  extraClassName="btn btn-primary btn-shadow ripple-effect-dark save-btn"
                  variant="primary"
                  type="submit"
                  disabled={false}
                >
                  {t("text.common.next")}
                </CommonButton>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PaymentOptionForm;
