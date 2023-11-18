import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { CommonButton } from "../../UiElement";
import { Input as TextInput } from "../../Antd";

function MustHaveForm({ t, onSubmit }) {
  const initialValues = {
    provider_needs: false,
    read_check: false,
    required: false,
    read_agree: false,
    accept: false,
    hairNeed: false,
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <div className="form-group uploadStuff">
              <div className="optionalHead d-flex justify-content-between align-items-center flex-wrap">
                <label className="form-label font-sm">
                  {t("text.mustHave.photoRequirement")}
                </label>
              </div>
              <div className="form-check light m-0">
                <TextInput
                  className="form-check-input"
                  name="provider_needs"
                  type="checkbox"
                  value="provider_needs"
                  onChange={(event) => {
                    props.setFieldValue("provider_needs", event.target.checked);
                  }}
                  validation={false}
                />

                <label className="form-check-label mb-0">
                  {t("text.mustHave.providerNeed")}
                </label>
              </div>
              <ul className="uploadStuff_multi d-flex flex-wrap flex-wrap list-unstyled">
                <li>
                  <label
                    htmlFor="uploadPhoto01"
                    className="uploadStuff_upload d-flex flex-column align-items-center justify-content-center mb-0"
                  >
                    <em className="icon-upload" />
                    <span className="d-block">
                      {t("text.mustHave.uploadImage")}
                    </span>
                    <input type="file" id="uploadPhoto01" />
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="uploadPhoto02"
                    className="uploadStuff_upload d-flex flex-column align-items-center justify-content-center mb-0"
                  >
                    <em className="icon-upload" />
                    <span className="d-block">
                      {t("text.mustHave.uploadImage")}
                    </span>
                    <input type="file" id="uploadPhoto02" />
                  </label>
                </li>
              </ul>
            </div>
            <div className="form-group">
              <div className="optionalHead d-flex justify-content-between align-items-center flex-wrap">
                <label className="form-label font-sm">
                  {t("text.mustHave.modalRequirement")}
                </label>
              </div>
              <div className="form-check light m-0">
                <TextInput
                  className="form-check-input"
                  name="hairNeed"
                  type="checkbox"
                  value="hairNeed"
                  onChange={(event) => {
                    props.setFieldValue("hairNeed", event.target.checked);
                  }}
                  validation={false}
                />

                <label className="form-check-label mb-0">
                  {t("text.mustHave.hairNeeds")}
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="optionalHead d-flex justify-content-between align-items-center flex-wrap">
                <label className="form-label font-sm">
                  {t("text.mustHave.consolutionForm")}
                </label>
              </div>
              <div className="form-check light m-0">
                <TextInput
                  className="form-check-input"
                  name="read_check"
                  type="checkbox"
                  value="read_check"
                  onChange={(event) => {
                    props.setFieldValue("read_check", event.target.checked);
                  }}
                  validation={false}
                />

                <label className="form-check-label mb-0">
                  {t("text.mustHave.contraindications")}
                </label>
              </div>
            </div>
            <div className="form-group openForm-btn">
              <Link
                to="#"
                className="btn btn-primary btn-shadow ripple-effect-dark"
              >
                {t("text.mustHave.opeForm")}
              </Link>
            </div>
            <div className="form-group">
              <div className="optionalHead d-flex justify-content-between align-items-center flex-wrap">
                <label className="form-label font-sm">
                  {" "}
                  {t("text.mustHave.patchTest")}
                </label>
              </div>
              <div className="form-check light m-0">
                <TextInput
                  className="form-check-input"
                  name="required"
                  type="checkbox"
                  value="required"
                  onChange={(event) => {
                    props.setFieldValue("required", event.target.checked);
                  }}
                  validation={false}
                />

                <label className="form-check-label mb-0">
                  {t("text.mustHave.patchTestRequired")}
                </label>
              </div>
            </div>
            <hr className="divider" />
            <div className="form-group">
              <div className="form-check light m-0">
                <TextInput
                  className="form-check-input"
                  name="read_agree"
                  type="checkbox"
                  value="read_agree"
                  onChange={(event) => {
                    props.setFieldValue("read_agree", event.target.checked);
                  }}
                  validation={false}
                />

                <label className="form-check-label mb-0">
                  {t("text.mustHave.readAgreed")}
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check light m-0">
                <TextInput
                  className="form-check-input"
                  name="accept"
                  type="checkbox"
                  value="accept"
                  onChange={(event) => {
                    props.setFieldValue("accept", event.target.checked);
                  }}
                  validation={false}
                />
                <label className="form-check-label mb-0">
                  {t("text.mustHave.accepyBooking")}
                </label>
              </div>
            </div>
            <div className="detailCard_footer detailCard_footer--booking d-flex align-items-center justify-content-end">
              <CommonButton
                extraClassName="btn btn-primary btn-shadow ripple-effect-dark save-btn booking"
                htmlType="submit"
                type="submit"
              >
                {t("text.mustHave.booking")}
              </CommonButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default MustHaveForm;
