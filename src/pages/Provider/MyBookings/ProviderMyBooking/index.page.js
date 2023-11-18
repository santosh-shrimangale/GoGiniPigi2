import React from "react";
import { useTranslation } from "react-i18next";
import { MetaTags, Tabs } from "../../../../components";
import ActionBookings from "../ActionBookings/index.page";
import BookingRequest from "../BookingRequest/index.page";
import PastBookings from "../PastBooking/index.page";
import UpComingBookings from "../UpComingBooking/index.page";

function ProviderMyBooking() {
  const { t } = useTranslation();

  const myBookingData = [
    {
      name: t("text.providerBooking.bookingRequested"),
      key: "bookingRequested",
      content: <BookingRequest />,
    },
    {
      name: t("text.providerBooking.upcomingBookings"),
      key: "upcomingBookings",
      content: <UpComingBookings />,
    },
    {
      name: t("text.providerBooking.pastBookings"),
      key: "pastBookings",
      content: <PastBookings />,
    },
    {
      name: t("text.providerBooking.actionBookings"),
      key: "actionBookings",
      content: <ActionBookings />,
    },
  ];

  return (
    <>
      <MetaTags title={t("text.myBookings.title")} />
      <div className="profileCard_heading d-flex align-items-center justify-content-between">
        <h1 className="profileCard_heading_title mb-0">
          {t("text.myBookings.title")}
        </h1>
      </div>
      <Tabs
        tabContent={myBookingData}
        tabClass=""
        navClass="nav nav-tabs border-0"
        navVariant="tabs"
        navItemClass=""
        navLinkClass="nav-link border-0"
      />
      <p className="font-bk text-400 mt-xxl-3 mt-2 mb-0 noteTxt">
        {t("text.common.bookingConfirmNote")}
      </p>
    </>
  );
}

export default ProviderMyBooking;
