import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Password as TextPassword } from "../../Antd";
import { CommonButton } from "../../UiElement";

import validation from "./validation";

function ChangePasswordForm({ onSubmit, t, loading }) {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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
          <>
            <Form>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="form-group">
                    <label htmlFor="pwd" className="form-label">
                      {t("text.changePassword.currentPassword")}
                    </label>
                    <div className="form-icon position-relative">
                      <TextPassword
                        className="form-control"
                        name="currentPassword"
                        setFieldValue={props.handleChange}
                        placeholder={t(
                          "text.changePassword.currentPasswordPlaceholder"
                        )}
                        type={showPassword1 ? "text" : "password"}
                        toggleIcon={
                          <Link
                            to="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setShowPassword1(!showPassword1);
                            }}
                            className="showPassword d-flex align-items-center justify-content-center "
                            data-target="currentPassword"
                          >
                            <em
                              className={`icon-eye-${
                                showPassword1 ? "open" : "close"
                              }`}
                            />
                          </Link>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="pwd" className="form-label">
                          {t("text.changePassword.newPassword")}
                        </label>
                        <div className="form-icon position-relative">
                          <TextPassword
                            className="form-control"
                            name="newPassword"
                            setFieldValue={props.handleChange}
                            placeholder={t(
                              "text.changePassword.newPasswordPlaceholder"
                            )}
                            type={showPassword2 ? "text" : "password"}
                            toggleIcon={
                              <Link
                                to="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setShowPassword2(!showPassword2);
                                }}
                                className="showPassword d-flex align-items-center justify-content-center"
                                data-target="newPassword"
                              >
                                <em
                                  className={`icon-eye-${
                                    showPassword2 ? "open" : "close"
                                  }`}
                                />
                              </Link>
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="pwd" className="form-label">
                          {t("text.changePassword.confirmPassword")}
                        </label>
                        <div className="form-icon position-relative">
                          <TextPassword
                            className="form-control"
                            name="confirmPassword"
                            setFieldValue={props.handleChange}
                            placeholder={t(
                              "text.changePassword.confirmPasswordPlaceholder"
                            )}
                            type={showPassword3 ? "text" : "password"}
                            toggleIcon={
                              <Link
                                to="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setShowPassword3(!showPassword3);
                                }}
                                className="showPassword d-flex align-items-center justify-content-center"
                                data-target="confirmPassword"
                              >
                                <em
                                  className={`icon-eye-${
                                    showPassword3 ? "open" : "close"
                                  }`}
                                />
                              </Link>
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-end">
                      <CommonButton
                        htmltype="submit"
                        type="submit"
                        loading={loading}
                        className="btn w-170 btn-primary ripple-effect-dark"
                      >
                        {t("text.changePassword.save")}
                      </CommonButton>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default ChangePasswordForm;
