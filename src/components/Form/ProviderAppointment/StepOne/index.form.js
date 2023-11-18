import { Form, Formik } from "formik";
import { CommonButton, ImageElement } from "../../../UiElement";
import validation from "./validation";
import { AntSelect as Select, Input as TextInput } from "../../../Antd";
import { hours, levelExpertise, minutes } from "./stepData";

function StepOne({ onSubmit, handleNextForm, t }) {
  const initialValues = {
    hours: 0,
    minute: 25,
    portfolio: "",
    levelExpertise: "Level1",
    rrp: "",
    yourPrice: "",
  };
  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={validation()}
      onSubmit={(values) => {
        onSubmit(values);
        handleNextForm("stepTwo", "next");
      }}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <div className="profileCard_inner">
              <fieldset>
                <h2 className="profileCard_inner_subtitle">
                  {t("text.createAppointment.appointmentInformation")}
                </h2>
                <div className="row align-items-end">
                  <div className="col-lg-9">
                    <div className="form-group mb-0">
                      <label className="form-label">
                        {t("text.createAppointment.durationAppointment")}
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label">
                            {t("text.createAppointment.hours")}
                          </label>
                          <Select
                            name="hours"
                            options={hours}
                            placeholder={t("text.createAppointment.hours")}
                            setFieldValue={props.handleChange}
                            showSearch
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label">
                            {t("text.createAppointment.minutes")}
                          </label>
                          <Select
                            name="minute"
                            options={minutes}
                            placeholder={t("text.createAppointment.minutes")}
                            defaultValue="0"
                            setFieldValue={props.handleChange}
                            showSearch
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label">
                            {t(
                              "text.createAppointment.reasonWhyRequireGiniPigs"
                            )}
                          </label>
                          <TextInput
                            className="form-control"
                            name="portfolio"
                            disabled={false}
                            variant="standard"
                            type="text"
                            placeholder={t("text.createAppointment.portfolio")}
                            setFieldValue={props.handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label">
                            {t("text.createAppointment.myLevelExpertise")}
                          </label>
                          <Select
                            name="levelExpertise"
                            options={levelExpertise}
                            placeholder={t("text.createAppointment.newbie")}
                            setFieldValue={props.handleChange}
                            showSearch
                          />
                        </div>
                      </div>
                    </div>

                    <p className="profileCard_inner_text">
                      {t("text.createAppointment.treatmentPrice")}{" "}
                    </p>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label">
                            {t("text.createAppointment.rrp")}
                          </label>
                          <TextInput
                            className="form-control"
                            name="rrp"
                            disabled={false}
                            variant="standard"
                            type="text"
                            placeholder="£105"
                            setFieldValue={props.handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label">
                            {t("text.createAppointment.yourPrice")}
                          </label>
                          <TextInput
                            className="form-control"
                            formItemClass="mb-0"
                            name="yourPrice"
                            disabled={false}
                            variant="standard"
                            type="text"
                            placeholder="£105.00"
                            setFieldValue={props.handleChange}
                          />
                          <span className="price text-500">
                            {t("text.createAppointment.yourPriceMustBe")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="uploadStuff profilePage_uploadStuff form-group mb-0">
                      <label className="form-label">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: t("text.createAppointment.addImageInfo"),
                          }}
                        />
                      </label>
                      <ul className="uploadStuff_multi d-flex flex-wrap flex-wrap list-unstyled">
                        <li>
                          <div className="uploadStuff_img position-relative">
                            <a
                              href="#"
                              className="position-absolute d-flex justify-content-center align-items-center"
                            >
                              <em className="icon-delete" />
                            </a>
                            <ImageElement
                              source="/profile-photo01.jpg"
                              className="img-flui"
                              alt="profile"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row align-items-end">
                  <div className="stepbtn d-flex justify-content-end align-items-center">
                    <CommonButton
                      extraClassName="btn-lg btn-shadow ripple-effect-dark"
                      variant="primary"
                      type="submit"
                    >
                      {t("text.common.next")}
                    </CommonButton>
                  </div>
                </div>
              </fieldset>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default StepOne;
