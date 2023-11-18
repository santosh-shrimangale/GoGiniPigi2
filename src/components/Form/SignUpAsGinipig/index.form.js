import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import routesMap from "../../../routeControl/userRouteMap";
import { Input as TextInput, Password as TextPassword } from "../../Antd";
import UploadInput from "../../Antd/Upload/index.ant";
import { CommonButton } from "../../UiElement";
import validation from "./validation";

function SignUpAsGinipigForm({ onSubmit, t, loading, apiEndPoints }) {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    image: "",
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
          <Form>
            <div className="authPage_box_profileimg text-center">
              <div className="authPage_box_profileimg_box position-relative">
                <UploadInput
                  apiEndPoints={apiEndPoints}
                  className="img-fluid"
                  name="image"
                  type="file"
                  defaultImageUrl={`${config.IMAGE_URL}/profile-img.jpg`}
                  setFieldValue={props.handleChange}
                >
                  <label className="filelabel d-flex align-items-center justify-content-center position-absolute">
                    <em className="icon-upload" />
                  </label>
                </UploadInput>
              </div>
              <h2>Profile Picture</h2>
              <p className="mb-0">
                This needs to be an up to date picture of yourself.
              </p>
            </div>
            <div className="form-group">
              <label className="form-label">
                {t("text.signUpAsGinipig.firstName")}
              </label>
              <TextInput
                className="form-control"
                name="firstName"
                disabled={false}
                variant="standard"
                type="text"
                placeholder={t("text.signUpAsGinipig.firstNamePlaceholder")}
                setFieldValue={props.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                {t("text.signUpAsGinipig.lastName")}
              </label>
              <TextInput
                className="form-control"
                name="lastName"
                disabled={false}
                variant="standard"
                type="text"
                placeholder={t("text.signUpAsGinipig.lastNamePlaceholder")}
                setFieldValue={props.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                {t("text.signUpAsGinipig.mobno")}
              </label>
              <TextInput
                className="form-control"
                name="phoneNumber"
                disabled={false}
                variant="standard"
                type="number"
                placeholder={t("text.signUpAsGinipig.mobnoPlaceholder")}
                setFieldValue={props.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                {t("text.signUpAsGinipig.email")}
              </label>
              <TextInput
                className="form-control"
                name="email"
                disabled={false}
                variant="standard"
                type="email"
                placeholder={t("text.signUpAsGinipig.emailPlaceholder")}
                setFieldValue={props.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd" className="form-label">
                {t("text.signUpAsGinipig.password")}
              </label>
              <div className="form-icon position-relative">
                <TextPassword
                  className="form-control form-control-lg"
                  name="password"
                  setFieldValue={props.handleChange}
                  placeholder={t("text.signUpAsGinipig.passwordPlaceholder")}
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
                      <em
                        className={`icon-eye-${
                          showPassword ? "open" : "close"
                        }`}
                      />
                    </Link>
                  }
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="pwd" className="form-label">
                {t("text.signUpAsGinipig.confirmPassword")}
              </label>
              <div className="form-icon position-relative">
                <TextPassword
                  className="form-control form-control-lg"
                  name="confirmPassword"
                  setFieldValue={props.handleChange}
                  placeholder={t(
                    "text.signUpAsGinipig.confirmPasswordPlaceholder"
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
                      data-target="confirmPassword"
                    >
                      <em
                        className={`icon-eye-${
                          showConfirmPassword ? "open" : "close"
                        }`}
                      />
                    </Link>
                  }
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="agree"
                  onChange={checkboxHandler}
                />
                <label className="form-check-label">
                  {t("text.signUpAsProvider.iAgree")}
                  <Link to={routesMap.TERMS_AND_CONDITION.path}>
                    {t("text.signUpAsProvider.terms")}
                  </Link>
                  &
                  <Link to={routesMap.PRIVACY_POLICY.path}>
                    {t("text.signUpAsProvider.privacy")}
                  </Link>
                  {t("text.signUpAsProvider.ofGoGiniPig")}
                </label>
              </div>
            </div>
            <div className="authPage_btn">
              <CommonButton
                type="submit"
                htmlType="submit"
                loading={loading}
                disabled={!agree}
                extraClassName="btn btn-primary btn-lg btn-shadow ripple-effect-dark w-100 mb-4"
              >
                {t("text.signUpAsGinipig.signup")}
              </CommonButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpAsGinipigForm;
