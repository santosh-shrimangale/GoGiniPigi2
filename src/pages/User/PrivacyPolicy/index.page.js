import { t } from "i18next";
import React from "react";

import {
  Breadcrumb,
  MainBanner,
  SectionLayoutComponent,
  MetaTags,
  AccordionComponent,
} from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";
import { privacyPolicyData } from "./privacyPolicyData";

function PrivacyPolicy() {
  const breadcrumb = [
    {
      path: routesMap.HOME.path,
      name: t("text.home.title"),
    },
    {
      path: "#",
      name: t("text.privacyPolicy.title"),
    },
  ];

  return (
    <>
      <MetaTags title={t("text.privacyPolicy.title")} />
      <main className="main-content cmsPage">
        <MainBanner
          mainBannerClass="pageBanner-small"
          extraClassName="commonhead commonhead-small"
          breadcrumb={<Breadcrumb breadcrumb={breadcrumb} />}
          heading="Privacy Policy"
        />
        <SectionLayoutComponent extraClassName="cmsPage_body py-70">
          <p className="cmsPage_body_para">
            Hello, welcome to the GoGiniPig Privacy Policy. At GoGiniPig
            (‘GGP’), we are committed to keeping your personal information safe
            and secure, whether you are a GiniPig or a Treatment Provider, and
            handling it in accordance with our legal obligations. This Privacy
            Policy sets out in detail the purposes for which we process your
            personal information, what rights you have in relation to that
            information, who we share it with and everything else we think is
            important for you to be aware of.
          </p>
          <p className="cmsPage_body_para">
            Please make sure you check it carefully and if you do not agree with
            it, then (although we hate to turn you away) you should not use our
            digital products or services. This is because by accessing our
            digital products or services, you confirm that you accept the way in
            which we process your personal information. This Privacy Policy
            forms part of our Website Terms of Use ,
            <a href="javascript:void(0);"> Stripe terms of service</a>
            and capitalised words and phrases in it have the same meaning as
            those in our Terms.
          </p>
          <p className="cmsPage_body_para">
            If you have any concerns, please feel free to contact us at{" "}
            <a href="mailto:admin@goginipig.com">admin@goginipig.com</a>.
          </p>
          <div className="cmsPage_body_inner">
            <h2>About GGP</h2>
            <p className="cmsPage_body_para">
              Go GiniPig Limited, trading as GoGiniPig{" "}
              <span>(referred to as Go GiniPig, GGP, we, our or us )</span> is a
              limited company incorporated in England and Wales, with registered
              company number 12201976 and registered at 1a Albany Road,
              Stratford-Upon-Avon, Warwickshire, CV37 6PG. We are the data
              controller for the purposes of the personal information processed
              in accordance with this Privacy Policy.
            </p>
            <p className="cmsPage_body_para">
              Our Data Protection Officer is responsible for our approach to
              data protection and protecting your privacy. You can contact our
              Data Protection Officer via email at:
              <a href="mailto:admin@goginipig.com"> admin@goginipig.com </a>.
            </p>
          </div>
          <div className="cmsPage_body_content">
            <h3>Contents of this Privacy Policy:</h3>
            <AccordionComponent
              AccordionContent={privacyPolicyData}
              hasNumber
            />
          </div>
        </SectionLayoutComponent>
      </main>
    </>
  );
}

export default PrivacyPolicy;
