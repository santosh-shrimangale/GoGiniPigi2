import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { checkValidPrice, DataTable } from "../../../../components";

function BookingRequest() {
  const { t } = useTranslation();
  const tableColumns = [
    {
      dataField: "bookingDetails",
      text: t("text.providerBooking.bookingDetails"),
      formatter: () => (
        <>
          <a href="#">
            <u>Botox Crowsfeet</u>
          </a>
          <div className="text-600 font-md">CV37 7SR</div>
        </>
      ),
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
    },
    {
      dataField: "action",
      text: "",
      formatter: (cell, row) => (
        <Link
          to={`/provider/booking-details ${row?.id}`}
          className="btn btn-sm btn-outline-secondary ripple-effect-dark viewDetail"
        >
          View Details
        </Link>
      ),
    },
  ];
  const tableData = [
    {
      dateTime: "20 Nov 2021 10:30",
      giniPigName: "Rebecca Green",
      totalPrice: checkValidPrice(50),
    },
  ];
  return (
    <div>
      <DataTable tableData={tableData} tableColumns={tableColumns} />
    </div>
  );
}

export default BookingRequest;
