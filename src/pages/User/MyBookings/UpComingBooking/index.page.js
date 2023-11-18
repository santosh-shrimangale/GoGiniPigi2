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

function UpComingBookings() {
  const [show, setShow] = useState(false);

  const onHandleShow = () => {
    setShow(true);
  };

  const onHide = () => {
    setShow(false);
  };
  const { t } = useTranslation();
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
      dataField: "serviceProvider",
      text: t("text.providerBooking.serviceProvider"),
    },
    {
      dataField: "totalPrice",
      text: t("text.providerBooking.totalPrice"),
      classes: "text-600 price",
      formatter: checkValidPrice,
    },
    {
      dataField: "paymentType",
      text: t("text.myBookings.paymentType"),
    },
    {
      dataField: "status",
      text: t("text.providerBooking.status"),
      formatter: statusFormatter,
    },
    {
      dataField: "action",
      text: "",
      formatter: (cell, row) => actionFormatter(options(row)),
    },
  ];
  const tableData = [
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
      serviceProvider: "Rebecca Green",
      totalPrice: 50,
      paymentType: "Full Payment",
      status: "day",
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
      serviceProvider: "Rebecca Green",
      totalPrice: 50,
      status: "days",
      id: 1,
      paymentType: "Partial Payment",
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
      serviceProvider: "Rebecca Green",
      totalPrice: 50,
      status: "days",
      id: 1,
      paymentType: "Partial Payment",
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
      serviceProvider: "Rebecca Green",
      totalPrice: 50,
      status: "day",
      id: 1,
      paymentType: "Partial Payment",
    },
  ];
  return (
    <>
      <DataTable tableData={tableData} tableColumns={tableColumns} />
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
    </>
  );
}

export default UpComingBookings;
