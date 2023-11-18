import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ImageElement,
  SectionLayoutComponent,
  VerticalViewComponent,
  MetaTags,
} from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";

function BookingRequest() {
  const { t } = useTranslation();
  return (
    <main className="main-content">
      <MetaTags title={t("text.bookingRequest.pageTitle")} />
      <SectionLayoutComponent extraClassName="bookingRequest bg-55 py-70">
        <div className="apmntBox">
          <div className="apmntBox_sec text-center">
            <ImageElement
              source="/request-sent.svg"
              alt="request-sent"
              className="svg"
            />
            <h1 className="apmntBox_sec_title">
              {t("text.bookingRequest.title")}
            </h1>
            <p className="mb-0">
              {t("text.bookingRequest.subHeding1")}{" "}
              <br className="d-none d-xl-block" />{" "}
              {t("text.bookingRequest.subHeding2")}
              <br className="d-none d-xl-block" />
              {t("text.bookingRequest.subHeding3")}{" "}
            </p>
          </div>
          <VerticalViewComponent
            categoryImage="/active-listing.png"
            beauty="Beauty"
            time="1h 30mins"
            detail="Nutritional evaluation for full overall..."
            portfolio=" Portfolio"
            nearly=" Nearly There"
            places="4 Places left"
            date=" 26/07/2022"
            oclock=" 10:30"
            code="CV37 7SR"
          />

          <div className="d-flex justify-content-center">
            <Link
              to={routesMap.MY_BOOKINGS.path}
              className="btn btn-primary next btn-lg btn-shadow ripple-effect-dark "
            >
              {t("text.bookingRequest.backtoprofile")}
            </Link>
          </div>
        </div>
      </SectionLayoutComponent>
    </main>
  );
}
export default BookingRequest;
