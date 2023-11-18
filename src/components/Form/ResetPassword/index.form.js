import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Password as TextPassword } from "../../Antd";
import { CommonButton } from "../../UiElement";
import validation from "./validation";

function ResetPasswordForm({ onSubmit, loading, t }) {
  const [showNewPassword, setNewShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const initialValues = {
    new_password: "",
    confirm_password: "",
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
            <div className="form-group ">
              <label htmlFor="pwd" className="form-label">
                {t("text.resetPassword.newPasswordLabel")}
              </label>
              <div className="form-icon position-relative">
                <TextPassword
                  className="form-control "
                  name="new_password"
                  setFieldValue={props.handleChange}
                  placeholder={t("text.resetPassword.newPasswordPlaceholder")}
                  type={showNewPassword ? "text" : "password"}
                  toggleIcon={
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setNewShowPassword(!showNewPassword);
                      }}
                      className="showPassword d-flex align-items-center justify-content-center"
                      data-target="password"
                    >
                      {showNewPassword ? (
                        <em className="icon-eye-open" />
                      ) : (
                        <em className="icon-eye-close" />
                      )}
                    </Link>
                  }
                />
              </div>
            </div>

            <div className="form-group mb-0">
              <label htmlFor="pwd" className="form-label">
                {t("text.resetPassword.confirmPasswordLabel")}
              </label>
              <div className="form-icon position-relative">
                <TextPassword
                  className="form-control "
                  name="confirm_password"
                  setFieldValue={props.handleChange}
                  placeholder={t(
                    "text.resetPassword.confirmPasswordPlaceholder"
                  )}
                  type={showConfirmPassword ? "text" : "password"}
                  toggleIcon={
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowConfirmPassword(!showConfirmPassword);
                      }}
                      className="showPassword d-flex align-items-center justify-content-center"
                      data-target="password"
                    >
                      {showConfirmPassword ? (
                        <em className="icon-eye-open" />
                      ) : (
                        <em className="icon-eye-close" />
                      )}
                    </Link>
                  }
                />
              </div>
            </div>
            <div className="authPage_btn">
              <CommonButton
                htmltype="submit"
                type="submit"
                loading={loading}
                className="btn btn-primary btn-lg btn-shadow ripple-effect-dark w-100 mb-4"
              >
                {t("text.resetPassword.reset")}
              </CommonButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ResetPasswordForm;
