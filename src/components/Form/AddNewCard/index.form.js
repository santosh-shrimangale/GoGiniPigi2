import { Form, Formik } from "formik";
import moment from "moment";
import React from "react";
import { Input as TextInput } from "../../Antd";
import Select from "../../Antd/Select/index.ant";
import { CommonButton } from "../../UiElement";
import validation from "./validation";

function AddNewCardForm({ onSubmit, loading, t }) {
  const currentYear = moment().format("YY");
  const years = [];
  const months = [];
  const y = 10;
  [...Array(y)].map((e, i) => {
    years.push({ id: Number(currentYear) + i, value: Number(currentYear) + i });
  });
  const m = 13;
  [...Array(m)].map((e, i) => {
    return i > 0 && months.push({ id: i, value: i });
  });

  const initialValues = {
    card_holder: "",
    card_number: "",
    exp_month: undefined,
    exp_year: undefined,
    cvc: "",
  };
  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={onSubmit}
      validationSchema={validation()}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <div className="row gx-2 gy-sm-2">
              <div className="col-xxl-12 col-sm-4 col-12">
                <div className="form-group mb-xl-0">
                  <TextInput
                    className="form-control "
                    name="card_holder"
                    disabled={false}
                    variant="standard"
                    type="text"
                    placeholder={t("text.paymentDetails.cardHolder")}
                    setFieldValue={props.handleChange}
                  />
                </div>
              </div>
              <div className="col-xxl-12 col-sm-4 col-12">
                <div className="form-group mb-xl-0">
                  <div className="input-group">
                    <TextInput
                      className="form-control creditCardText cardNumber"
                      name="card_number"
                      disabled={false}
                      variant="standard"
                      type="number"
                      placeholder={t("text.paymentDetails.cardNumber")}
                      setFieldValue={props.handleChange}
                    />
                    <span className="input-group-append">
                      <span className="input-group-icon">
                        <em className="icon-card" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-sm-4 col-6">
                <div className="form-group mb-xl-0">
                  {months?.length > 0 && (
                    <Select
                      name="exp_month"
                      className="form-select"
                      options={months}
                      placeholder={t("text.paymentDetails.monthPlaceHolder")}
                      setFieldValue={props.handleChange}
                      showSearch
                    />
                  )}
                </div>
              </div>
              <div className="col-xxl-6 col-sm-4 col-6">
                <div className="form-group mb-xl-0">
                  {years?.length > 0 && (
                    <Select
                      name="exp_year"
                      className="form-select"
                      options={years}
                      placeholder={t("text.paymentDetails.yearPlaceHolder")}
                      setFieldValue={props.handleChange}
                      showSearch
                    />
                  )}
                </div>
              </div>

              <div className="col-xxl-6 col-sm-4 col-6">
                <div className="form-group">
                  <TextInput
                    className="form-control creditCardText"
                    name="cvc"
                    disabled={false}
                    variant="standard"
                    type="number"
                    placeholder={t("text.paymentDetails.cvv")}
                    setFieldValue={props.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="text-end">
              <CommonButton
                htmlType="submit"
                type="submit"
                loading={loading}
                className="btn btn-primary btn-shadow ripple-effect-dark"
              >
                {t("text.paymentDetails.saveCard")}
              </CommonButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default AddNewCardForm;
