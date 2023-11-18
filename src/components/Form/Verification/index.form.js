import { Form, Formik } from "formik";
import React from "react";
import { Input as TextInput } from "../../Antd";
import { CommonButton } from "../../UiElement";
import validation from "./validation";

function VerificationForm({ onSubmit, loading, t }) {
  const initialValues = {
    otp: "",
  };
  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={validation()}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <div className="form-group mb-0">
              <TextInput
                className="form-control authPage_box_otpinpt text-center"
                name="otp"
                disabled={false}
                variant="standard"
                type="number"
                placeholder={t("text.verification.otpPlaceholder")}
                setFieldValue={props.handleChange}
              />
            </div>

            <div className="authPage_btn">
              <CommonButton
                htmlType="submit"
                type="submit"
                loading={loading}
                className="btn btn-primary mb-0 btn-lg btn-shadow ripple-effect-dark w-100"
              >
                {t("text.verification.verify")}
              </CommonButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default VerificationForm;
