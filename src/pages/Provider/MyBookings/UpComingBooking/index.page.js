import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  actionFormatter,
  checkValidPrice,
  CommonButton,
  DataTable,
  ModalComponent,
} from "../../../../components";

function UpComingBookings() {
  const [show, setShow] = useState(false);
  const [noShow, setNoShow] = useState(false);

  const onHandleShow = () => {
    setShow(true);
  };
  const handleModal = () => {
    setNoShow(true);
  };
  const onCloseModal = () => {
    setNoShow(false);
  };
  const onHide = () => {
    setShow(false);
  };
  const { t } = useTranslation();
  const options = () => {
    const optionsArr = [
      {
        name: t("text.providerBooking.bookingCancel"),
        path: "#",
        action: "confirm",
        onClickHandle: () => onHandleShow(),
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
      formatter: (cell, row) => (
        <div className="d-flex justify-content-start align-items-center">
          <CommonButton
            to={`/provider/booking-details ${row?.id}`}
            extraClassName="btn btn-sm btn-primary text-white ripple-effect-dark"
          >
            {t("text.providerBooking.attend")}
          </CommonButton>
          <CommonButton
            to={`/provider/booking-details ${row?.id}`}
            onClick={handleModal}
            extraClassName="btn btn-sm btn-outline-secondary ripple-effect-dark"
          >
            {t("text.providerBooking.noShow")}
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
      <ModalComponent
        onHandleCancel={onCloseModal}
        show={noShow}
        source="congratulations.svg"
        extraClassName="mx-auto text-center position-relative"
      >
        <h4>
          {t("text.providerBooking.allDone")}
          <br className="d-none d-lg-block" />
          {t("text.providerBooking.waiting")}
        </h4>
        <p>{t("text.providerBooking.canWeEntice")}</p>
        <div className="modal-buttons d-inline-block">
          <Link
            to="/provider/my-bookings"
            className="btn btn-lg btn-primary text-white ripple-effect-dark w-140"
          >
            {t("text.providerBooking.releaseMyPayment")}
          </Link>
        </div>
      </ModalComponent>
    </>
  );
}

export default UpComingBookings;
