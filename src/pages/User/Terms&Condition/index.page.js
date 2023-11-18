import { t } from "i18next";
import React from "react";
import {
  MainBanner,
  Breadcrumb,
  SectionLayoutComponent,
  AccordionComponent,
  MetaTags,
} from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";
import { accTermsAndCondition } from "./term&conditionData";

function TermsAndCondition() {
  const breadcrumb = [
    {
      path: routesMap.HOME.path,
      name: t("text.home.title"),
    },
    {
      path: "#",
      name: t("text.termsAndCondition.title"),
    },
  ];
  return (
    <>
      <MetaTags title={t("text.termsAndCondition.title")} />
      <MainBanner
        extraClassName="commonhead-small"
        breadcrumb={<Breadcrumb breadcrumb={breadcrumb} />}
        heading="Terms and Conditions"
      />

      <SectionLayoutComponent extraClassName="cmsPage_body py-70">
        <p className="cmsPage_body_heading">
          Welcome to GoGiniPig. Before you start enjoying our services, we have
          to set out a few ground rules. We have done our best to cut the legal
          chat and make them as easy to understand as possible but if you have
          any questions at all, feel free to contact us at{" "}
          <a href="javascript:void(0);">admin@goginipig.com</a>
        </p>
        <div className="cmsPage_body_content">
          <AccordionComponent AccordionContent={accTermsAndCondition} />
        </div>
      </SectionLayoutComponent>
    </>
  );
}
export default TermsAndCondition;
