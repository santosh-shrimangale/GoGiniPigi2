import { Form, Formik } from "formik";
import { Input as TextInput } from "../../Antd";
import Select from "../../Antd/Select/index.ant";
import { CommonButton } from "../../UiElement";
import validation from "./validation";

function ProfileForm({
  t,
  disabledField,
  editProfileHandler,
  onSubmit,
  saveprofile,
  options = [],
  userData,
}) {
  const initialValues = {
    first_name: userData?.first_name || "",
    last_name: userData?.last_name || "",
    gender: userData?.gender || undefined,
    email: userData?.email || "",
    phone_number: userData?.phone_number || "",
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={validation(disabledField)}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <div className="profileCard_heading d-flex align-items-center justify-content-between">
              <h1 className="profileCard_heading_title mb-0">
                {t("text.profile.myProfile")}
              </h1>

              <div>
                {disabledField && (
                  <CommonButton
                    className="btn btn-outline-primary sidebarMenu me-1"
                    type="button"
                    onClick={editProfileHandler}
                  >
                    {t("text.profile.editProfile")}
                  </CommonButton>
                )}
              </div>
            </div>

            <div className="main-content profilePage">
              <section className="py-70 bg-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6">
                      <div className="form-group">
                        <label className="form-label">
                          {t("text.profile.firstName")}
                        </label>
                        <TextInput
                          className="form-control"
                          name="first_name"
                          readOnly={disabledField}
                          variant="standard"
                          type="text"
                          id="fName"
                          placeholder={t("text.profile.firstNamePlaceholder")}
                          setFieldValue={props.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="form-group">
                        <label className="form-label">
                          {t("text.profile.lastName")}
                        </label>
                        <TextInput
                          className="form-control"
                          name="last_name"
                          readOnly={disabledField}
                          variant="standard"
                          type="text"
                          placeholder={t("text.profile.lastNamePlaceholder")}
                          setFieldValue={props.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="form-group">
                        <label className="form-label">
                          {t("text.profile.gender")}
                        </label>
                        <Select
                          name="gender"
                          options={options}
                          disabled={disabledField}
                          placeholder={t(
                            "text.signUpAsProvider.selectWhereAreYouWorking"
                          )}
                          setFieldValue={props.handleChange}
                          showSearch
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="form-group">
                        <label className="form-label">
                          {t("text.profile.email")}
                        </label>
                        <TextInput
                          className="form-control "
                          name="email"
                          readOnly
                          variant="standard"
                          type="email"
                          placeholder={t("text.profile.emailPlaceholder")}
                          setFieldValue={props.handleChange}
                          icon={<em className="varified" />}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="form-group">
                        <label className="form-label">
                          {t("text.profile.mobile")}
                        </label>
                        <TextInput
                          className="form-control"
                          name="phone_number"
                          readOnly={disabledField}
                          variant="standard"
                          type="text"
                          placeholder={t("text.profile.mobilePlaceholder")}
                          setFieldValue={props.handleChange}
                        />
                      </div>
                    </div>
                    {!disabledField && (
                      <div className="col-md-12 text-md-end">
                        <CommonButton
                          htmlType="submit"
                          type="submit"
                          onClick={() => saveprofile()}
                          className="btn btn-primary ripple-effect-dark"
                        >
                          {t("text.profile.save")}
                        </CommonButton>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ProfileForm;
