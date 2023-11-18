import React from "react";
import { useTranslation } from "react-i18next";
import { CommonButton, MetaTags, Tabs } from "../../../../components";
import BookingTabs from "../BookingTabs/index.page";

function ProviderMyListings() {
  const { t } = useTranslation();

  const tabContent = [
    {
      name: t("text.myListings.activeBooking"),
      key: "activeBooking",
      content: <BookingTabs t={t} />,
    },
    {
      name: t("text.myListings.pastBooking"),
      key: "pastBooking",
      content: <BookingTabs t={t} />,
    },
  ];
  return (
    <>
      <MetaTags title={t("text.myListings.title")} />
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="profileCard_heading_title">
          {t("text.myListings.title")}
        </h1>
        <CommonButton
          className="btn btn-primary d-lg-none sidebarMenu mb-3"
          type="button"
        >
          <em className="icon-user" />
        </CommonButton>
      </div>
      <div>
        <Tabs
          tabContent={tabContent}
          tabClass=""
          navClass="nav nav-tabs myListingTabs"
          navVariant="tabs"
          navItemClass=""
          navLinkClass="nav-link"
        />
      </div>
    </>
  );
}

export default ProviderMyListings;
