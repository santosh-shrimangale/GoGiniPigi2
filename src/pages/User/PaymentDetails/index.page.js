import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  DataTable,
  ImageElement,
  MetaTags,
  SweetAlert,
} from "../../../components";
import AddNewCardForm from "../../../components/Form/AddNewCard/index.form";
import { CardServices } from "../../../services";
import { tableColumns, tableData } from "./paymentDetailsData";
import { logger, modalNotification } from "../../../utils";

function PaymentDetails() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [cardDetails, setCardDetails] = useState([]);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const handleCardDetails = async () => {
    const response = await CardServices.cardDetailsServices();
    setCardDetails(response.data);
  };

  useEffect(() => {
    handleCardDetails();
  }, []);
  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await CardServices.deleteCardServices(deleteId);
      const { success, message } = response;
      if (success) {
        modalNotification({
          type: "success",
          message,
        });
        setLoading(false);
        handleCardDetails();
      }
    } catch (error) {
      logger(error);
    }
    setLoading(false);
  };
  const onSubmit = async (values, { resetForm }) => {
    setLoading(true);

    try {
      let bodyData = { ...values };

      const response = await CardServices.addCardServices(bodyData);
      const { success, message } = response;
      if (success) {
        modalNotification({
          type: "success",
          message,
        });
        setLoading(false);
        handleCardDetails();
        resetForm({ values: "" });
      }
    } catch (error) {
      logger(error);
    }
    setLoading(false);
  };

  return (
    <>
      <MetaTags title={t("text.paymentDetails.pageTitle")} />

      <div className="d-xxl-flex">
        <div className="paymentSec_left ">
          <div className="profileCard_heading profileCard_heading-border d-flex align-items-center justify-content-between">
            <h1 className="profileCard_heading_title">
              {t("text.paymentDetails.title")}
            </h1>
            <button
              className="btn btn-primary d-lg-none sidebarMenu mb-2"
              type="button"
            >
              <em className="icon-user" />
            </button>
          </div>
          <div className="row gx-4">
            {cardDetails.map((card) => {
              return (
                <div className="col-sm-6 col-md-6 col-xl-6">
                  <div className="paymentSec_card paymentSec_card-visa">
                    <ImageElement
                      source="/visa-bg.svg"
                      className="paymentSec_card_bg paymentSec_card_bg-visa"
                      alt="visa"
                    />
                    <ImageElement
                      source="/visa-logo.png"
                      className="visa-logo img-fluid"
                      alt="visa"
                    />

                    <div className="text-white paymentSec_card_pin">
                      <span>{t("text.paymentDetails.xxxx")} </span>{" "}
                      <span> {t("text.paymentDetails.xxxx")} </span>{" "}
                      <span> {t("text.paymentDetails.xxxx")} </span>{" "}
                      <span> {card.last_four_digit}</span>
                    </div>
                    <div className="d-flex justify-content-between paymentSec_card_info">
                      <div className=" text-white font-md overflow-hidden pe-3">
                        <span>{t("text.paymentDetails.cardHoldername")}</span>
                        <h2 className="mb-0 text-truncate">
                          {card.card_holder}
                        </h2>
                      </div>
                      <div className="text-white font-md">
                        <span>{t("text.paymentDetails.expires")}</span>
                        <h2 className="mb-0">
                          {card.exp_month}/{card.exp_year}
                        </h2>
                      </div>
                    </div>
                    <SweetAlert
                      reverseButtons
                      title={t("text.paymentDetails.alertTitle")}
                      icon="warning"
                      text={t("text.paymentDetails.alertSubTitle")}
                      confirmButtonColor="#ea4c89"
                      showCancelButton
                      setIsAlertVisible={setIsAlertVisible}
                      cancelButtonText={t("text.common.cancle")}
                      confirmButtonText={t("text.paymentDetails.confirmText")}
                      onConfirmAlert={handleDelete}
                      show={isAlertVisible}
                      showLoaderOnConfirm
                      loading={loading}
                    />
                    <Link
                      to="#"
                      className="deletebtn"
                      onClick={(e) => {
                        e.preventDefault();
                        setDeleteId(card.id);
                        setIsAlertVisible(true);
                      }}
                    >
                      <em className="icon-delete" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="paymentSec_right">
          <div className="profileCard_heading profileCard_heading-border">
            <h2 className="profileCard_heading_title">
              {t("text.paymentDetails.addNewCard")}
            </h2>
          </div>
          <AddNewCardForm onSubmit={onSubmit} loading={loading} t={t} />
        </div>
      </div>

      <div className="profileCard_heading">
        <h2 className="profileCard_heading_title mb-0">
          {t("text.paymentDetails.history")}
        </h2>
      </div>
      <DataTable tableData={tableData} tableColumns={tableColumns} />
    </>
  );
}

export default PaymentDetails;
