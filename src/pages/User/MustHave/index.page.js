import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  BackButton,
  BeautyPannel,
  MustHaveForm,
  SectionLayoutComponent,
  MetaTags,
} from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";

function MustHave() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(routesMap.BOOKING_REQUEST.path);
  };
  return (
    <main className="main-content bg-55 availabilityPage">
      <MetaTags title={t("text.mustHave.pageTitle")} />
      <SectionLayoutComponent extraClassName="availabilitySec py-70">
        <div className="row row g-3">
          <div className="col-lg-8 detailCard">
            <div className="detailCard_inner">
              <div className="detailCard_header d-flex align-items-center justify-content-between flex-wrap">
                <h1 className="font-bd mb-0"> {t("text.mustHave.title")}</h1>
                <div className="d-flex align-items-center justify-content-end ms-auto">
                  <BackButton
                    path="#"
                    extraClassName="readmore d-flex align-items-center justify-content-center position-relative"
                  />
                </div>
              </div>
              <div className="detailCard_body">
                <MustHaveForm t={t} onSubmit={onSubmit} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 beautyPannel">
            <BeautyPannel
              time="30 min"
              beauty="Beauty"
              description="Freshener up your face the natural looking way"
              price="47.60"
              discountPrice="60.00"
              name="Rebecca"
              address="Salon, CV37 Stratford-upon-Avon"
              portfolio="Portfolio"
              places="4 Places left"
              nearly="Nearly There"
              rating="4.5"
              reviewsCount="156"
              count="1"
              addressHeading="Beauty Salon"
              code="CV37 7SR"
              backgroundImage="/category/cat10.png"
              userImage="/category/user.png"
            />
          </div>
        </div>
      </SectionLayoutComponent>
    </main>
  );
}

export default MustHave;
