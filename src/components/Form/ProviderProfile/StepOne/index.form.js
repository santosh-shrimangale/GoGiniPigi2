import { Form, Formik } from "formik";
import validation from "./validation";
import { CommonButton } from "../../../UiElement";
import { Input as TextInput } from "../../../Antd";
import { Auth } from "../../../../apiEndPoints";

function StepOne({
  onSubmit,
  handleNextForm,
  t,
  formData,
  storageKey,
  userId,
}) {
  const initialValues = {
    postcode: formData?.postcode || "",
    building: formData?.building || "",
    street: formData?.street || "",
    city: formData?.city || "",
    mobile: formData?.mobile || "",
    company_name_show_on_profile: formData?.company_name_show_on_profile
      ? parseInt(formData?.company_name_show_on_profile)
      : 1,
    user_id: userId,
    profile_stage: 1,
    accept: ["yes"],
    permission: ["yes"],
  };
  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={validation()}
      onSubmit={(values) => {
        delete values.accept;
        delete values.permission;
        onSubmit(
          { ...values, apiEndPoint: Auth.providerProfileStepTwo },
          storageKey
        );
        handleNextForm("stepTwo", "next");
      }}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <fieldset>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">
                      {t("text.profileProvider.treatmentLocationAddress")}
                    </label>
                    <TextInput
                      className="form-control"
                      name="postcode"
                      disabled={false}
                      variant="standard"
                      type="text"
                      placeholder={t(
                        "text.profileProvider.pleaseEnterPostcode"
                      )}
                      setFieldValue={props.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">
                      {t("text.profileProvider.flatBuildingNo")}
                    </label>
                    <TextInput
                      className="form-control"
                      name="building"
                      disabled={false}
                      variant="standard"
                      type="text"
                      placeholder={t(
                        "text.profileProvider.pleaseEnterFlatBuildingNo"
                      )}
                      setFieldValue={props.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-group">
                    <label className="form-label">
                      {t("text.profileProvider.streetName")}
                    </label>
                    <TextInput
                      className="form-control"
                      name="street"
                      disabled={false}
                      variant="standard"
                      type="text"
                      placeholder={t(
                        "text.profileProvider.pleaseEnterStreetName"
                      )}
                      setFieldValue={props.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-group">
                    <label className="form-label">
                      {t("text.profileProvider.cityTownName")}
                    </label>
                    <TextInput
                      className="form-control"
                      name="city"
                      disabled={false}
                      variant="standard"
                      type="text"
                      placeholder={t(
                        "text.profileProvider.pleaseEnterCityTownName"
                      )}
                      setFieldValue={props.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">
                      {t("text.profileProvider.showYourCompanyName")}
                    </label>
                    <div className="d-flex">
                      <div className="form-check form-check-inline">
                        <TextInput
                          className="form-check-input"
                          name="company_name_show_on_profile"
                          type="radio"
                          setFieldValue={props.handleChange}
                          value={1}
                          validation={false}
                          id="showCompanyNameYes"
                          checked={
                            props.values?.company_name_show_on_profile === 1
                              ? true
                              : null
                          }
                        />
                        <label
                          className="form-check-label font-bd mb-0"
                          htmlFor="showCompanyNameYes"
                        >
                          {t("text.common.yes")}
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <TextInput
                          className="form-check-input"
                          name="company_name_show_on_profile"
                          type="radio"
                          setFieldValue={props.handleChange}
                          value={0}
                          validation={false}
                          id="showCompanyNameNo"
                          checked={
                            props.values?.company_name_show_on_profile === 0
                              ? true
                              : null
                          }
                        />
                        <label
                          className="form-check-label font-bd mb-0"
                          htmlFor="showCompanyNameNo"
                        >
                          {t("text.common.no")}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">
                      {t("text.profileProvider.mobileNumber")}
                    </label>
                    <TextInput
                      formItemClass="mb-0"
                      className="form-control"
                      name="mobile"
                      disabled={false}
                      variant="standard"
                      type="number"
                      placeholder={t(
                        "text.profileProvider.pleaseEnterMobileNumber"
                      )}
                      setFieldValue={props.handleChange}
                    />
                    <span className="errormsg">
                      {t("text.profileProvider.onceBookingConfirmed")}
                    </span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="form-check">
                      <TextInput
                        className="form-check-input"
                        name="accept"
                        disabled={false}
                        type="checkbox"
                        setFieldValue={props.handleChange}
                        id="accept"
                        value="yes"
                        validation={false}
                        defaultChecked={
                          props.values?.accept ? "defaultChecked" : null
                        }
                      />
                      <label className="form-check-label mb-0" htmlFor="accept">
                        {t("text.profileProvider.iAcceptDetails")}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="form-check">
                      <TextInput
                        className="form-check-input"
                        name="permission"
                        disabled={false}
                        type="checkbox"
                        setFieldValue={props.handleChange}
                        id="permission"
                        value="yes"
                        validation={false}
                        defaultChecked={
                          props.values?.permission ? "defaultChecked" : null
                        }
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="permission"
                      >
                        {t("text.profileProvider.permissionDetails")}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="authPage_stepbtn d-flex justify-content-end align-items-center">
              <CommonButton
                extraClassName="btn-lg btn-shadow ripple-effect-dark"
                variant="primary"
                type="submit"
                disabled={
                  props.values?.accept &&
                  props.values.accept.length &&
                  props.values?.permission &&
                  props.values.permission.length
                    ? null
                    : "disabled"
                }
              >
                {t("text.common.next")}
              </CommonButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default StepOne;
