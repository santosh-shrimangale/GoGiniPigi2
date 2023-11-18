import { Formik, Form } from "formik";
import { t } from "i18next";
import { AntTextArea as TextArea, Rate } from "../../Antd";
import { CommonButton } from "../../UiElement";

function ProviderLeaveReviewForm({ onSubmit, loading }) {
  const initialValues = {
    review: "",
  };
  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {() => {
        return (
          <Form>
            <>
              <div className="reviewSec_review leaveReview">
                <div className="row align-items-center">
                  <div>
                    <Rate />
                  </div>
                </div>
              </div>

              <div className="reviewSec_comment">
                <div className="d-flex justify-content-between">
                  <h2 className="font-sm">
                    {t("text.providerLeaveReview.comments")}
                  </h2>
                  <p className="text-200 reviewSec_text">
                    {t("text.providerLeaveReview.optional")}
                  </p>
                </div>

                <div className="position-relative form-group mb-0">
                  <TextArea
                    className="form-control mb-2"
                    placeholder="Comments"
                    name="text"
                  />
                </div>
                <div className="text-end">
                  <p className="text-200 mb-0">
                    {t("text.providerLeaveReview.characterLimit")}
                  </p>
                </div>
              </div>
              <div className="text-end">
                <CommonButton
                  type="submit"
                  className="btn btn-lg w-170 btn-primary ripple-effect-dark"
                  loading={loading}
                >
                  {t("text.providerLeaveReview.submitReview")}
                </CommonButton>
              </div>
            </>
          </Form>
        );
      }}
    </Formik>
  );
}
export default ProviderLeaveReviewForm;
