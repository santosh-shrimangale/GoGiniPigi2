import { useState } from "react";
import { Form, Formik } from "formik";
import { BackButton, CommonButton, ImageElement } from "../../../UiElement";
import validation from "./validation";
import {
  Input as TextInput,
  AntTextArea as TextArea,
  AntSelect as Select,
} from "../../../Antd";
import { appropriateInsurance } from "./stepData";
// import { handlePreview } from "../../../../utils";

function StepTwo({ onSubmit, handleNextForm, t }) {
  const initialValues = {
    treatment: "hair",
    treatmentTitle: "",
    treatmentCategories: ["cut", "color", "blow dry"],
    description: "",
    appropriateInsurance: "yes",
    license: "yes",
    parkingOnSite: "yes",
    disabilityAccess: "yes",
    preference: "Be Able To Approve",
    requireImg: "",
    bio: "",
    consult: "",
    uploadImage: "",
    patchTest: "",
  };
  const [preview, setPreview] = useState("");
  const getPreview = ({ target }) => {
    // setPreview(handlePreview(target));
    console.log(setPreview, target);
  };
  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={validation()}
      onSubmit={(values) => {
        onSubmit(values);
        handleNextForm("stepThree", "next");
      }}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <div className="profileCard_inner">
              <fieldset>
                <div className="form-group form-apt">
                  <label className="form-label">
                    {t("text.createAppointment.selectYourTreatmentType")}
                  </label>
                  <div className="d-sm-flex">
                    <div className="form-check form-check-inline d-block d-sm-inline-block">
                      <TextInput
                        className="form-check-input"
                        name="treatment"
                        disabled={false}
                        type="radio"
                        setFieldValue={props.handleChange}
                        id="hair"
                        validation={false}
                        defaultChecked
                        value="hair"
                      />
                      <label
                        className="form-check-label font-sm mb-0  text-800"
                        htmlFor="hair"
                      >
                        {t("text.createAppointment.hair")}
                      </label>
                    </div>
                    <div className="form-check form-check-inline  d-block d-sm-inline-block">
                      <TextInput
                        className="form-check-input"
                        name="treatment"
                        disabled={false}
                        type="radio"
                        setFieldValue={props.handleChange}
                        id="beauty"
                        value="beauty"
                        validation={false}
                      />
                      <label
                        className="form-check-label font-sm mb-0 text-800"
                        htmlFor="beauty"
                      >
                        {t("text.createAppointment.beauty")}
                      </label>
                    </div>
                    <div className="form-check form-check-inline d-block d-sm-inline-block">
                      <TextInput
                        className="form-check-input"
                        name="treatment"
                        disabled={false}
                        type="radio"
                        setFieldValue={props.handleChange}
                        id="aesthetics"
                        value="aesthetics"
                        validation={false}
                      />
                      <label
                        className="form-check-label font-sm mb-0  text-800"
                        htmlFor="aesthetics"
                      >
                        {t("text.createAppointment.aesthetics")}
                      </label>
                    </div>
                    <div className="form-check form-check-inline d-block d-sm-inline-block">
                      <TextInput
                        className="form-check-input"
                        name="treatment"
                        disabled={false}
                        type="radio"
                        setFieldValue={props.handleChange}
                        id="wellness"
                        value="wellness"
                        validation={false}
                      />
                      <label
                        className="form-check-label font-sm mb-0 text-800"
                        htmlFor="wellness"
                      >
                        {t("text.createAppointment.wellness")}
                      </label>
                    </div>
                  </div>
                  {props.touched.treatment && props.errors.treatment ? (
                    <div className="ant-form-item-explain-error">
                      {props.errors.treatment}
                    </div>
                  ) : null}
                </div>
                <div id="hairForm">
                  <div className="form-group">
                    <label className="form-label" htmlFor="treatmentTitle">
                      {t("text.createAppointment.treatmentTitle")}
                    </label>
                    <TextInput
                      className="form-control"
                      name="treatmentTitle"
                      disabled={false}
                      type="text"
                      setFieldValue={props.handleChange}
                      placeholder={t("text.createAppointment.titleText")}
                      id="treatmentTitle"
                    />
                    <span className="d-block errormsg text-end">50/50</span>
                  </div>
                  <div className="form-group d-md-flex justify-content-between mb-0">
                    <label className="form-label" htmlFor="treatmenttitle">
                      {t("text.createAppointment.chooseAllCategories")}
                    </label>
                    <span className="d-block text-md-end aptPage_selectcatg mt-0 mb-3 mb-md-0">
                      {t(
                        "text.createAppointment.youCanSelectMaximumCategories"
                      )}
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="form-group mb-0">
                        <div className="form-check">
                          <TextInput
                            className="form-check-input"
                            name="treatmentCategories"
                            disabled={false}
                            type="checkbox"
                            id="cut"
                            value="cut"
                            validation={false}
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="cut">
                            {t("text.createAppointment.cut")}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="form-group  mb-0">
                        <div className="form-check">
                          <TextInput
                            className="form-check-input"
                            name="treatmentCategories"
                            disabled={false}
                            type="checkbox"
                            value="color"
                            id="color"
                            defaultChecked
                            validation={false}
                          />
                          <label className="form-check-label" htmlFor="color">
                            {t("text.createAppointment.color")}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="form-group mb-0">
                        <div className="form-check">
                          <TextInput
                            className="form-check-input"
                            name="treatmentCategories"
                            disabled={false}
                            type="checkbox"
                            value="blow dry"
                            id="blowDry"
                            validation={false}
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="blowDry">
                            {t("text.createAppointment.blowDry")}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="form-group mb-0">
                        <div className="form-check">
                          <TextInput
                            className="form-check-input"
                            name="treatmentCategories"
                            disabled={false}
                            type="checkbox"
                            value="extensions"
                            validation={false}
                            id="extensions"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="extensions"
                          >
                            {t("text.createAppointment.extensions")}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="form-group mb-0">
                        <div className="form-check">
                          <TextInput
                            className="form-check-input"
                            name="treatmentCategories"
                            disabled={false}
                            type="checkbox"
                            value="treatmentCategory"
                            validation={false}
                            id="treatmentCategory"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="treatmentCategory"
                          >
                            {t("text.createAppointment.treatment")}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="form-group mb-0">
                        <div className="form-check">
                          <TextInput
                            className="form-check-input"
                            name="treatmentCategories"
                            disabled={false}
                            type="checkbox"
                            value="occasions"
                            validation={false}
                            id="occasions"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="occasions"
                          >
                            {t("text.createAppointment.occasions")}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="form-group mb-0">
                        <div className="form-check">
                          <TextInput
                            className="form-check-input"
                            name="treatmentCategories"
                            disabled={false}
                            type="checkbox"
                            value="otherHair"
                            validation={false}
                            id="otherHair"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="otherHair"
                          >
                            {t("text.createAppointment.other")}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="form-group mb-0">
                        <div className="form-check">
                          <TextInput
                            className="form-check-input"
                            name="treatmentCategories"
                            disabled={false}
                            type="checkbox"
                            value="menHair"
                            validation={false}
                            id="menHair"
                          />
                          <label className="form-check-label" htmlFor="menHair">
                            {t("text.createAppointment.men")}
                          </label>
                        </div>
                      </div>
                    </div>
                    {props.touched.treatmentCategories &&
                    props.errors.treatmentCategories ? (
                      <div className="ant-form-item-explain-error">
                        {props.errors.treatmentCategories}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="bio" className="form-label mt-2">
                      {t("text.createAppointment.treatmentDescriptionTitle")}
                    </label>
                    <span className="mb-2 mb-md-3 d-block errormsg mt-0">
                      {t("text.createAppointment.treatmentDescription")}{" "}
                    </span>
                    <TextArea
                      className="form-control textarea"
                      name="description"
                      setFieldValue={props.handleChange}
                      id="description"
                      maxLength="100"
                      minLength="25"
                      placeholder="Description"
                    />
                    <span className="d-block text-end errormsg mb-3 mb-sm-0">
                      500/500
                    </span>
                  </div>
                  <div className="form-group  mb-0">
                    <label className="form-label form-label_title font-md">
                      {t("text.createAppointment.thoseExtraImportantDetails")}
                    </label>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6">
                      <div className="form-group">
                        <label className="form-label">
                          {t("text.createAppointment.appropriateInsurance")}
                        </label>
                        <Select
                          className="form-select"
                          name="appropriateInsurance"
                          defaultValue="yes"
                          setFieldValue={props.handleChange}
                          showSearch
                          options={appropriateInsurance}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="form-group">
                        <label className="form-label">
                          {t("text.createAppointment.license")}
                          <span className="text-400 ms-1">*</span>
                        </label>
                        <Select
                          className="form-select"
                          name="license"
                          defaultValue="yes"
                          setFieldValue={props.handleChange}
                          showSearch
                          options={appropriateInsurance}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="form-group">
                        <label className="form-label">
                          {t("text.createAppointment.parkingOnSite")}
                          <span className="text-400 ms-1">*</span>
                        </label>
                        <Select
                          className="form-select"
                          name="parkingOnSite"
                          defaultValue="yes"
                          setFieldValue={props.handleChange}
                          showSearch
                          options={appropriateInsurance}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="form-group">
                        <label className="form-label">
                          {t("text.createAppointment.disabilityAccess")}
                          <span className="text-400 ms-1">*</span>
                        </label>
                        <Select
                          className="form-select"
                          name="disabilityAccess"
                          defaultValue="yes"
                          setFieldValue={props.handleChange}
                          showSearch
                          options={appropriateInsurance}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label className="form-label form-label_title font-md">
                        {t("text.createAppointment.yourAppointmentPreference")}
                      </label>
                    </div>
                    <div className="form-check">
                      <TextInput
                        className="form-check-input"
                        name="preference"
                        disabled={false}
                        type="radio"
                        setFieldValue={props.handleChange}
                        id="treatmentYes"
                        value="Fill My Diary"
                        validation={false}
                      />
                      <label
                        className="form-check-label mb-2"
                        htmlFor="treatmentYes"
                      >
                        {t("text.createAppointment.iWantToFillMyDiary")}
                      </label>
                    </div>
                    <div className="form-check">
                      <TextInput
                        className="form-check-input"
                        name="preference"
                        disabled={false}
                        type="radio"
                        setFieldValue={props.handleChange}
                        id="treatmentNo"
                        value="Be Able To Approve"
                        defaultChecked
                        validation={false}
                      />
                      <label className="form-check-label" htmlFor="treatmentNo">
                        {t("text.createAppointment.iWantToBeAbleToApprove")}
                      </label>
                    </div>
                    {props.touched.preference && props.errors.preference ? (
                      <div className="ant-form-item-explain-error mb-2">
                        {props.errors.preference}
                      </div>
                    ) : null}
                    <span className="d-block errormsg mb-3 mb-sm-0 text-400 mt-0">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: t(
                            "text.createAppointment.YourAppointmentInfo"
                          ),
                        }}
                      />
                    </span>
                  </div>
                  <div className="form-group  mb-0">
                    <label className="form-label form-label_title font-md">
                      {t("text.createAppointment.giniPigMustHaves")}
                    </label>
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label className="form-label">
                        {t("text.createAppointment.photoRequirements")}{" "}
                        <span className="text-200 font-rg">
                          ({t("text.createAppointment.optional")})
                        </span>
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <TextInput
                        className="form-check-input"
                        name="requireImg"
                        disabled={false}
                        type="checkbox"
                        setFieldValue={props.handleChange}
                        id="requireImg"
                        validation={false}
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="requireImg"
                      >
                        {t("text.createAppointment.requireGiniPigSupplyImages")}
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label className="form-label">
                        {t("text.createAppointment.modelRequirements")}
                      </label>
                    </div>
                    <span className="form-check-label mb-2 mb-sm-3 errormsg mt-0">
                      {t("text.createAppointment.modelRequirementsDescription")}
                    </span>
                    <TextArea
                      className="form-control textarea h-165"
                      name="bio"
                      id="bio"
                      maxLength="100"
                      minLength="25"
                      placeholder="Description"
                      setFieldValue={props.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label className="form-label">
                        {t("text.createAppointment.consultationForm")}
                        <span className="text-200 font-rg">
                          ({t("text.createAppointment.optional")})
                        </span>
                      </label>
                    </div>
                    <div className="form-check">
                      <TextInput
                        className="form-check-input"
                        name="consult"
                        disabled={false}
                        type="checkbox"
                        setFieldValue={props.handleChange}
                        id="consult"
                        validation={false}
                      />
                      <label className="form-check-label" htmlFor="consult">
                        {t(
                          "text.createAppointment.consultationFormDescription"
                        )}
                      </label>
                    </div>
                    <div className="uploadStuff">
                      <ul className="uploadStuff_consult d-flex flex-wrap flex-wrap list-unstyled mb-0">
                        <li>
                          <label
                            htmlFor="uploadImage"
                            className="uploadStuff_upload d-flex flex-column align-items-center justify-content-center mb-0"
                          >
                            <em className="icon-upload" />
                            <span className="d-block">
                              {t("text.common.uploadImage")}
                            </span>
                            <TextInput
                              name="uploadImage"
                              type="file"
                              onChange={(e) => {
                                getPreview(e);
                                props.handleChange(e);
                              }}
                              id="uploadImage"
                              validation={false}
                            />
                            {preview ? (
                              <ImageElement
                                previewSource={preview}
                                className="preview-image"
                                alt="preview"
                              />
                            ) : null}
                          </label>
                        </li>
                      </ul>
                      {props.touched.uploadImage && props.errors.uploadImage ? (
                        <div className="ant-form-item-explain-error mb-2">
                          {props.errors.uploadImage}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label className="form-label">
                        {t("text.createAppointment.patchTest")}{" "}
                        <span className="text-200 font-rg">
                          ({t("text.createAppointment.optional")})
                        </span>
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <TextInput
                        className="form-check-input"
                        name="patchTest"
                        disabled={false}
                        type="checkbox"
                        setFieldValue={props.handleChange}
                        id="patchTest"
                        validation={false}
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="patchTest"
                      >
                        {t(
                          "text.createAppointment.requireGiniPigCompletePatchTest"
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="stepbtn d-flex justify-content-between align-items-center">
                  <div>
                    <BackButton
                      path=""
                      linkAction={() => handleNextForm("stepOne", "stepTwo")}
                    >
                      <em className="icon-arrow-back" /> {t("text.common.back")}
                    </BackButton>
                  </div>
                  <CommonButton
                    extraClassName="btn-lg btn-shadow ripple-effect-dark"
                    variant="primary"
                    type="submit"
                  >
                    {t("text.common.next")}
                  </CommonButton>
                </div>
              </fieldset>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default StepTwo;
