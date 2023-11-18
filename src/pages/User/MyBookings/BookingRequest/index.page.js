import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  actionFormatter,
  DataTable,
  ModalComponent,
  statusFormatter,
} from "../../../../components";

function BookingRequest() {
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
  const tableColumns = [
    {
      dataField: "bookingDetails",
      text: t("text.providerBooking.bookingDetails"),
      formatter: () => (
        <>
          <Link to="#">
            <u>Botox Crowsfeet</u>
          </Link>
          <div className="text-600 font-md">CV37 7SR</div>
        </>
      ),
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
      dateTime: "20 Nov 2021 10:30",
      serviceProvider: "Rebecca Green",
      status: "pending",
    },
    {
      dateTime: "20 Nov 2021 10:30",
      serviceProvider: "Rebecca Green",
      status: "pending",
    },
    {
      dateTime: "20 Nov 2021 10:30",
      serviceProvider: "Rebecca Green",
      status: "pending",
    },
    {
      dateTime: "20 Nov 2021 10:30",
      serviceProvider: "Rebecca Green",
      status: "pending",
    },
  ];
  return (
    <div>
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
    </div>
  );
}

export default BookingRequest;
