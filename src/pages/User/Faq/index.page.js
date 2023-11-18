import { t } from "i18next";
import React from "react";

import {
  Breadcrumb,
  FaqComponent,
  MainBanner,
  MetaTags,
  SectionLayoutComponent,
} from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";
import { faqTabsData } from "./faqData";

function Faq() {
  const breadcrumb = [
    {
      path: routesMap.HOME.path,
      name: t("text.home.title"),
    },
    {
      path: "#",
      name: t("text.faq.title"),
    },
  ];

  return (
    <>
      <MetaTags title={t("text.faq.pageTitle")} />
      <main className="main-content cmsPage">
        <MainBanner
          mainBannerClass="pageBanner-small"
          extraClassName="commonhead commonhead-small"
          breadcrumb={<Breadcrumb breadcrumb={breadcrumb} />}
          heading={t("text.faq.title")}
        />
        <SectionLayoutComponent extraClassName="cmsPage_body bg-55 py-70">
          <h2 className="cmsPage_body_text">{t("text.faq.subTitle")}</h2>
          <FaqComponent faqData={faqTabsData} />
        </SectionLayoutComponent>
      </main>
    </>
  );
}

export default Faq;
