import React from "react";
import { t } from "i18next";

import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { Rate, AntTextArea as TextArea } from "../../Antd";
import { CommonButton } from "../../UiElement";

function ProviderReviewForm({ onSubmit, loading }) {
  const initialValues = {
    text: "",
  };
  return (
    <Formik initialValues={{ ...initialValues }} onSubmit={onSubmit}>
      {(props) => {
        return (
          <Form>
            <>
              <div className="reviewSec_review">
                <h2 className="font-sm">
                  {t("text.providerReview.rateEachCategory")}
                </h2>
                <div className="row align-items-center">
                  <div className="reviewSec_review_col">
                    <h3> {t("text.providerReview.friendliness")}</h3>
                    <Rate />
                  </div>
                  <div className="reviewSec_review_col">
                    <h3> {t("text.providerReview.reliability")}</h3>
                    <Rate />
                  </div>
                  <div className="reviewSec_review_col ms-auto">
                    <div className="reviewSec_review_total bg-95 d-flex align-items-center justify-content-center ms-auto">
                      <em className="icon-star-fill fill text-400" />
                      <h3 className="mb-0 ms-3 font-bk text-400">
                        {t("text.providerReview.zero")}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reviewSec_comment">
                <div className="d-flex justify-content-between">
                  <h2 className="font-sm">
                    {t("text.providerReview.comments")}
                  </h2>
                  <p className="text-200 reviewSec_text">
                    {t("text.providerReview.optional")}
                  </p>
                </div>

                <div className="position-relative form-group mb-0">
                  <TextArea
                    className="form-control mb-2"
                    placeholder="Comments"
                    name="text"
                    type="text"
                    setFieldValue={props.handleChange}
                  />

                  <div className="d-lg-flex justify-content-between">
                    <p className="text-200 mb-0">
                      {t("text.providerReview.problemWithYourProvider")}
                      <Link
                        to="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-400"
                      >
                        <u>{t("text.providerReview.contact")}</u>
                      </Link>
                    </p>
                    <p className="text-200 mb-0">
                      {t("text.providerReview.characterLimit")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-end">
                <CommonButton
                  htmlType="submit"
                  type="submit"
                  className="btn btn-lg w-170 btn-primary ripple-effect-dark"
                  loading={loading}
                >
                  {t("text.providerReview.submitReview")}
                </CommonButton>
              </div>
            </>
          </Form>
        );
      }}
    </Formik>
  );
}
export default ProviderReviewForm;
