import React from "react";
import { t } from "i18next";
import {
  MetaTags,
  DataTable,
  SectionLayoutComponent,
} from "../../../components";
import { providerPaymentData } from "./providerPaymentDetailsData";

function ProviderPaymentDetails() {
  return (
    <>
      <MetaTags title={t("text.providerPaymentDetails.title")} />
      <SectionLayoutComponent extraClassName="main-content profilePage">
        <div className="d-lg-flex">
          <div className="profileCard paymentSec card card-body border-0">
            <div className="profileCard_heading d-flex align-items-center justify-content-between">
              <h2 className="profileCard_heading_title mb-0">
                {t("text.providerPaymentDetails.title")}
              </h2>
            </div>
            <DataTable
              tableData={providerPaymentData.data}
              tableColumns={providerPaymentData.column}
            />
          </div>
        </div>
      </SectionLayoutComponent>
    </>
  );
}
export default ProviderPaymentDetails;
