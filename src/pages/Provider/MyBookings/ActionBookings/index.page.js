import React from "react";
import { useTranslation } from "react-i18next";
import {
  actionFormatter,
  checkValidPrice,
  CommonButton,
  DataTable,
} from "../../../../components";

function ActionBookings() {
  const { t } = useTranslation();

  const options = () => {
    const optionsArr = [
      {
        name: t("text.providerBooking.download"),
        path: "#",
        action: "redirect",
      },
      {
        name: t("text.providerBooking.bookingCancel"),
        path: "#",
        action: "redirect",
      },
    ];
    return optionsArr;
  };
  const tableData = [
    {
      bookingDetails: (
        <>
          <a href="#">
            <u>Botox Crowsfeet</u>
          </a>
          <div className="text-600 font-md">CV37 7SR</div>
        </>
      ),
      dateTime: "20 Nov 2021 10:30",
      giniPigName: "Rebecca Green",
      totalPrice: 50,
      status: "completed",
      id: 1,
    },
    {
      bookingDetails: (
        <>
          <a href="#">
            <u>Botox Crowsfeet</u>
          </a>
          <div className="text-600 font-md">CV37 7SR</div>
        </>
      ),
      dateTime: "20 Nov 2021 10:30",
      giniPigName: "Rebecca Green",
      totalPrice: 50,
      status: "completed",
      id: 1,
    },
  ];
  const tableColumns = [
    {
      dataField: "bookingDetails",
      text: t("text.providerBooking.bookingDetails"),
    },
    {
      dataField: "dateTime",
      text: t("text.providerBooking.dateTime"),
    },
    {
      dataField: "giniPigName",
      text: t("text.providerBooking.giniPigName"),
    },
    {
      dataField: "totalPrice",
      text: t("text.providerBooking.totalPrice"),
      classes: "text-600 price",
      formatter: checkValidPrice,
    },

    {
      dataField: "button",
      text: "",
      formatter: () => (
        <div className="d-flex justify-content-end align-items-center">
          <CommonButton
            to="#"
            extraClassName="btn btn-sm btn-primary text-white ripple-effect-dark"
          >
            {t("text.providerBooking.serviceComplete")}
          </CommonButton>
        </div>
      ),
    },
    {
      dataField: "action",
      text: "",
      formatter: (cell, row) => actionFormatter(options(row)),
    },
  ];
  return (
    <>
      <DataTable tableData={tableData} tableColumns={tableColumns} />
    </>
  );
}

export default ActionBookings;
