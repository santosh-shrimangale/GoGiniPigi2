import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  actionFormatter,
  checkValidPrice,
  DataTable,
  ModalComponent,
  statusFormatter,
} from "../../../../components";

function PastBookings() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const onHandleShow = () => {
    setShow(true);
  };

  const onHide = () => {
    setShow(false);
  };

  const options = () => {
    const optionsArr = [
      {
        name: t("text.myBookings.viewDetails"),
        action: "redirect",
        path: "#",
      },
      {
        name: t("text.myBookings.cancelBooking"),
        action: "confirm",
        path: "#",
        onClickHandle: () => onHandleShow(),
      },
      {
        name: t("text.myBookings.report"),
        action: "redirect",
        path: "#",
      },
    ];
    return optionsArr;
  };
  const data = [
    {
      bookingDetails: (
        <>
          <Link to="#">
            <u>Botox Crowsfeet</u>
          </Link>
          <div className="text-600 font-md">CV37 7SR</div>
        </>
      ),
      dateTime: "20 Nov 2021 10:30",
      giniPigName: "Rebecca Green",
      totalPrice: 50,
      status: "noShow",
      id: 1,
    },
    {
      bookingDetails: (
        <>
          <Link to="#">
            <u>Botox Crowsfeet</u>
          </Link>
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
      <ModalComponent
        onHandleCancel={onHide}
        show={show}
        source="cancel.svg"
        extraClassName="mx-auto text-center position-relative"
      >
        <h4>
          {t("text.providerBooking.areYouSure")}
          <br className="d-none d-lg-block" />
          {t("text.providerBooking.toCancelBooking")}
        </h4>
        <p>{t("text.providerBooking.note")}</p>
        <div className="modal-buttons d-inline-block">
          <Link
            to="/provider/my-bookings"
            className="btn btn-lg btn-primary text-white ripple-effect-dark w-140"
          >
            {t("text.providerBooking.cancelNow")}
          </Link>
        </div>
      </ModalComponent>
    </div>
  );
}

export default PastBookings;
