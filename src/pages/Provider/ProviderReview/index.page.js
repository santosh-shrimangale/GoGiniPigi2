import React, { useState } from "react";
import { t } from "i18next";
import {
  MetaTags,
  SectionLayoutComponent,
  ImageElement,
  ProviderReviewForm,
  BackButton,
} from "../../../components";

function ProviderReview() {
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
  };
  return (
    <>
      <MetaTags title={t("text.providerReview.title")} />
      <main className="main-content profilePage">
        <SectionLayoutComponent extraClassName="reviewSec py-70 bg-55">
          <div className="profileCard card card-body border-0 d-block mx-auto">
            <div className="profileCard_heading profileCard_heading-border">
              <div className="d-flex justify-content-between">
                <h1 className="profileCard_heading_title mb-xxl-3 mb-2">
                  {t("text.providerReview.writeAReview")}
                </h1>
                <div>
                  <BackButton
                    path="#"
                    extraClassName="readmore d-flex align-items-center justify-content-center position-relative"
                  />
                </div>
              </div>
              <p className="profileCard_heading_text mb-xl-2">
                {t("text.providerReview.treatmentServiceInformation")}
              </p>
            </div>
            <div className="reviewSec_info bg-95">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="reviewSec_info_left">
                    <div className="d-flex align-items-center">
                      <div className="badge badge-sm badge-yellow-pill rounded-pill">
                        {t("text.providerReview.beauty")}
                      </div>
                      <span className="text-200 ms-3 font-lt">
                        {t("text.providerReview.mins")}
                      </span>
                    </div>
                    <h2 className="text-truncate font-sm">
                      {t(
                        "text.providerReview.nutritionalEvaluationForFullOverall"
                      )}
                    </h2>
                    <p className="mb-2 reviewSec_text font-bk">
                      {" "}
                      <span className=" font-sm">
                        {t("text.providerReview.bookingDateTime")}
                      </span>
                      {t("text.providerReview.nov")}
                    </p>
                    <ul className="list-unstyled d-flex flex-wrap reviewSec_list">
                      <li>
                        <p className="text-600 mb-0 reviewSec_text font-bk">
                          {t("text.providerReview.cV")}
                        </p>
                      </li>
                      <li className="text-200 font-lt">
                        <em className="icon-portfolio text-600" />
                        {t("text.providerReview.portfolio")}
                      </li>
                      <li className="text-200 font-lt">
                        <em className="icon-nearly text-600" />
                        {t("text.providerReview.nearlyThere")}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 text-lg-end reviewSec_info_right">
                  <h2 className="font-bd ">{t("text.providerReview.euro")}</h2>
                  <div className="d-flex reviewSec_info_img justify-content-lg-end align-items-center">
                    <ImageElement
                      source="messages/01.png"
                      className="img-fluid rounded-circle"
                      alt="provider-review"
                    />
                    <span>{t("text.providerReview.rebeccaGreen")}</span>
                  </div>
                </div>
              </div>
            </div>
            <ProviderReviewForm onSubmit={onSubmit} loading={loading} />
          </div>
        </SectionLayoutComponent>
      </main>
    </>
  );
}
export default ProviderReview;
