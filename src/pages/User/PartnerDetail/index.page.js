import React from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import {
  ImageElement,
  MetaTags,
  SectionLayoutComponent,
  MainBanner,
  Breadcrumb,
} from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";

function PartnerDetail() {
  const breadcrumb = [
    {
      path: routesMap.HOME.path,
      name: t("text.home.title"),
    },
    {
      path: "#",
      name: t("text.partnerDetail.title"),
    },
  ];
  return (
    <>
      <MetaTags title={t("text.partnerDetail.title")} />
      <MainBanner
        extraClassName="commonhead-small"
        breadcrumb={<Breadcrumb breadcrumb={breadcrumb} />}
        heading={t("text.partnerDetail.title")}
      />

      <SectionLayoutComponent extraClassName="py-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="commonhead">
                <h2 className="commonhead_title">
                  {t("text.partnerDetail.heading")}
                </h2>
                <p>
                  Registering as one of our amazing Treatment or Service
                  Providers couldn’t be
                  <span className="font-sm">easier.</span> Whether you need
                  GiniPigs for Portfolios, Case Studies, a Training Course or
                  those <span className="font-sm">Insta</span> Pictures we will
                  connect you. We aren’t just for{" "}
                  <span className="font-sm">Newbies</span> to the industry, we
                  are for <span className="font-sm">Pros</span> and{" "}
                  <span className="font-sm">Stars</span> too, we will connect
                  GiniPigs to everyone from -{" "}
                  <span className="font-sm">
                    Academies, Salons, Clinics or Online,
                  </span>{" "}
                  we have thought of you all. You are your own best canvas, so
                  register with a picture of yourself before listing your
                  Treatments or Services and{" "}
                  <span className="font-sm">entice</span> your GiniPigs.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center mb-3">
                <ImageElement
                  className="img-fluid"
                  source="partner-with-us.png"
                  alt="partner-with-us"
                />
              </div>
            </div>
          </div>
          <div className="commonhead">
            <p> {t("text.partnerDetail.description")}</p>
            <p className="font-sm mb-0">{t("text.partnerDetail.question")}</p>
          </div>
          <div className="commonhead_button d-flex">
            <Link
              to="#"
              onClick={(e) => e.preventDefault()}
              className="btn btn-primary ripple-effect-dark btn-lg me-3"
            >
              {t("text.partnerDetail.ginipig")}
            </Link>
            <Link
              to="#"
              onClick={(e) => e.preventDefault()}
              className="btn btn-primary ripple-effect-dark btn-lg"
            >
              {t("text.partnerDetail.provider")}
            </Link>
          </div>
        </div>
      </SectionLayoutComponent>
    </>
  );
}
export default PartnerDetail;
