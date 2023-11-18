import { Form, Formik } from "formik";
import React from "react";
import { Input as TextInput } from "../../Antd";
import { CommonButton } from "../../UiElement";
import validation from "./validation";

function ForgetPasswordForm({ onSubmit, loading, t }) {
  const initialValues = {
    email: "",
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
              <label className="form-label"> {t("text.login.email")}</label>
              <TextInput
                className="form-control"
                name="email"
                disabled={false}
                variant="standard"
                type="email"
                placeholder={t("text.forgotPassword.emailPlaceholder")}
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
                {t("text.forgotPassword.send")}
              </CommonButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ForgetPasswordForm;
