import React from "react";
import { useTranslation } from "react-i18next";
import {
  actionFormatter,
  checkValidPrice,
  DataTable,
  statusFormatter,
} from "../../../../components";

function PastBookings() {
  const { t } = useTranslation();

  const options = () => {
    const optionsArr = [
      {
        name: t("text.providerBooking.writeAReview"),
        path: `/provider/booking-details`,
        action: "redirect",
      },
      {
        name: t("text.providerBooking.download"),
        path: "#",
        action: "redirect",
      },
    ];
    return optionsArr;
  };
  const data = [
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
      status: "cancelled",
      id: 1,
    },
  ];
  const column = [
    {
      dataField: "bookingDetails",
      text: "Booking Details",
    },
    {
      dataField: "dateTime",
      text: "Date & Time",
    },
    {
      dataField: "giniPigName",
      text: "GiniPig Name",
    },
    {
      dataField: "totalPrice",
      text: "Total Price",
      classes: "text-600 price",
      formatter: checkValidPrice,
    },
    {
      dataField: "status",
      text: "Status",
      formatter: (col, row) => {
        return (
          <>
            {row.status === "cancelled" ? (
              <div className="justify-content-start align-items-center">
                <span>{statusFormatter(row?.status)}</span>
                <div className="font-sm status">by Ginipig</div>
              </div>
            ) : (
              <span>{statusFormatter(row?.status)}</span>
            )}
          </>
        );
      },
    },
    {
      dataField: "action",
      text: "",
      formatter: (cell, row) => actionFormatter(options(row)),
    },
  ];

  return (
    <div>
      <DataTable tableData={data} tableColumns={column} />
    </div>
  );
}

export default PastBookings;
