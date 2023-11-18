import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input as TextInput, Password as TextPassword } from "../../Antd";
import { CommonButton } from "../../UiElement";
import validation from "./validation";
import routesMap from "../../../routeControl/userRouteMap";

function LoginForm({ onSubmit, loading, t }) {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    email: "",
    password: "",
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
            <div className="form-group">
              <label className="form-label"> {t("text.login.email")}</label>
              <TextInput
                className="form-control"
                name="email"
                disabled={false}
                variant="standard"
                type="email"
                placeholder={t("text.login.emailPlaceholder")}
                setFieldValue={props.handleChange}
              />
            </div>
            <div className="form-group mb-0">
              <label htmlFor="pwd" className="form-label">
                {t("text.login.password")}
              </label>
              <div className="form-icon position-relative">
                <TextPassword
                  className="form-control form-control-lg"
                  name="password"
                  setFieldValue={props.handleChange}
                  placeholder={t("text.login.passwordPlaceholder")}
                  type={showPassword ? "text" : "password"}
                  toggleIcon={
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPassword(!showPassword);
                      }}
                      className="showPassword d-flex align-items-center justify-content-center"
                      data-target="password"
                    >
                      {showPassword ? (
                        <em className="icon-eye-open" />
                      ) : (
                        <em className="icon-eye-close" />
                      )}
                    </Link>
                  }
                />
              </div>
            </div>
            <div className="text-end">
              <Link
                to={routesMap.FORGET_PASSWORD.path}
                className="d-block authPage_box_forgot"
              >
                {t("text.login.forgotPassword")}
              </Link>
            </div>
            <div className="authPage_btn">
              <CommonButton
                htmlType="submit"
                type="submit"
                loading={loading}
                className="btn btn-primary btn-lg btn-shadow ripple-effect-dark w-100 mb-4"
              >
                {t("text.login.login")}
              </CommonButton>
              <Link
                to={routesMap.SIGNUP_AS_GINIPIG.path}
                className="btn btn-outline-warning btn-lg ripple-effect w-100"
              >
                {t("text.login.registerAsGiniPig")}
              </Link>
              <Link
                to={routesMap.SIGNUP_AS_PROVIDER.path}
                className="btn btn-primary btn-outline-primary btn-lg ripple-effect w-100"
              >
                {t("text.login.registerAsTreatmentServices")}
              </Link>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
