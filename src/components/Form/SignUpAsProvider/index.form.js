import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
// import config from "../../../config";
import routesMap from "../../../routeControl/userRouteMap";
import {
  Input as TextInput,
  Password as TextPassword,
  AntSelect as Select,
} from "../../Antd";
import UploadInput from "../../Antd/Upload/index.ant";
import { CommonButton } from "../../UiElement";
import validation from "./validation";

function SignUpAsProviderForm({ onSubmit, loading, t, apiEndPoints }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: [],
    working: undefined,
  };

  const options = [
    {
      id: "salon",
      name: "Salon",
    },
  ];

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
              <h2>{t("text.signUpAsProvider.profile")}</h2>
              <p className="mb-0">{t("text.signUpAsProvider.upToDate")}</p>
            </div>
            <div className="form-group">
              <label className="form-label">
                {t("text.signUpAsProvider.firstName")}
              </label>
              <TextInput
                className="form-control"
                name="firstName"
                disabled={false}
                variant="standard"
                type="text"
                placeholder={t("text.signUpAsProvider.firstNamePlaceholder")}
                setFieldValue={props.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                {t("text.signUpAsProvider.lastName")}
              </label>
              <TextInput
                className="form-control"
                name="lastName"
                disabled={false}
                variant="standard"
                type="text"
                placeholder={t("text.signUpAsProvider.lastNamePlaceholder")}
                setFieldValue={props.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                {t("text.signUpAsProvider.whereAreYouWorking")}
              </label>
              <Select
                name="working"
                options={options}
                placeholder={t(
                  "text.signUpAsProvider.selectWhereAreYouWorking"
                )}
                setFieldValue={props.handleChange}
                showSearch
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                {t("text.signUpAsProvider.companyName")}
              </label>
              <TextInput
                className="form-control"
                name="companyName"
                disabled={false}
                variant="standard"
                type="text"
                placeholder={t("text.signUpAsProvider.companyNamePlaceholder")}
                setFieldValue={props.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                {t("text.signUpAsProvider.email")}
              </label>
              <TextInput
                className="form-control"
                name="email"
                disabled={false}
                variant="standard"
                type="email"
                placeholder={t("text.signUpAsProvider.emailPlaceholder")}
                setFieldValue={props.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                {t("text.signUpAsProvider.password")}
              </label>
              <div className="form-icon position-relative">
                <TextPassword
                  className="form-control form-control-lg"
                  name="password"
                  setFieldValue={props.handleChange}
                  placeholder={t("text.signUpAsProvider.passwordPlaceholder")}
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
              <label className="form-label">
                {t("text.signUpAsProvider.confirmPassword")}
              </label>
              <div className="form-icon position-relative">
                <TextPassword
                  className="form-control form-control-lg"
                  name="confirmPassword"
                  setFieldValue={props.handleChange}
                  placeholder={t(
                    "text.signUpAsProvider.confirmPasswordPlaceholder"
                  )}
                  type={showConfirmPassword ? "text" : "password"}
                  toggleIcon={
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setConfirmShowPassword(!showConfirmPassword);
                      }}
                      className="showPassword d-flex align-items-center justify-content-center"
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

export default SignUpAsProviderForm;
