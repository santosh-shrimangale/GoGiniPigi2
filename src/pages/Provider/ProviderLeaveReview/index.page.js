import React, { useState } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";

import {
  MetaTags,
  SectionLayoutComponent,
  ProviderLeaveReviewForm,
} from "../../../components";

function ProviderLeaveReview() {
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    setLoading(true);
  };
  return (
    <main className="main-content profilePage">
      <MetaTags title={t("text.providerLeaveReview.title")} />

      <SectionLayoutComponent extraClassName="reviewSec py-70 bg-55">
        <div className="profileCard card card-body border-0 d-block mx-auto">
          <div className="profileCard_heading profileCard_heading-border">
            <div className="d-flex justify-content-between">
              <h1 className="profileCard_heading_title">
                {t("text.providerLeaveReview.leaveReviewGoGiniPig")}
              </h1>
              <div>
                <Link
                  to="#"
                  onClick={(e) => e.preventDefault()}
                  className="readmore d-flex align-items-center justify-content-center position-relative btnSkip"
                >
                  {t("text.providerLeaveReview.skip")}
                </Link>
              </div>
            </div>
          </div>
          <ProviderLeaveReviewForm onSubmit={onSubmit} loading={loading} />
        </div>
      </SectionLayoutComponent>
    </main>
  );
}
export default ProviderLeaveReview;
