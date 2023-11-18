import { t } from "i18next";
import { ImageElement, statusFormatter } from "../../../components";

export const providerPaymentData = {
  data: [
    {
      amount: (
        <>
          <div className="price">£47.60</div>
        </>
      ),
      dateTime: "06 May 2022",
      recipient: (
        <>
          <ImageElement
            source="/payment/recipient01.png"
            className="img-fluid rounded-circle me-2 imgRecipient"
            alt="recipient01"
          />
          Gabriel Benks
        </>
      ),
      status: "sent",
      id: 1,
    },
    {
      amount: (
        <>
          <div className="price">£47.60</div>
        </>
      ),
      dateTime: "06 May 2022",
      recipient: (
        <>
          <ImageElement
            source="/payment/recipient02.png"
            className="img-fluid rounded-circle me-2 imgRecipient"
            alt="recipient01"
          />
          Gabriel Benks
        </>
      ),
      status: "pending",
      id: 2,
    },
    {
      amount: (
        <>
          <div className="price">£47.60</div>
        </>
      ),
      dateTime: "06 May 2022",
      recipient: (
        <>
          <ImageElement
            source="/payment/recipient03.png"
            className="img-fluid rounded-circle me-2 imgRecipient"
            alt="recipient01"
          />
          Gabriel Benks
        </>
      ),
      status: "cancelled",
      id: 3,
    },
    {
      amount: (
        <>
          <div className="price">£47.60</div>
        </>
      ),
      dateTime: "06 May 2022",
      recipient: (
        <>
          <ImageElement
            source="/payment/recipient04.png"
            className="img-fluid rounded-circle me-2 imgRecipient"
            alt="recipient01"
          />
          Gabriel Benks
        </>
      ),
      status: "sent",
      id: 4,
    },
    {
      amount: (
        <>
          <div className="price">£47.60</div>
        </>
      ),
      dateTime: "06 May 2022",
      recipient: (
        <>
          <ImageElement
            source="/payment/recipient05.png"
            className="img-fluid rounded-circle me-2 imgRecipient"
            alt="recipient01"
          />
          Gabriel Benks
        </>
      ),
      status: "cancelled",
      id: 5,
    },
    {
      amount: (
        <>
          <div className="price">£47.60</div>
        </>
      ),
      dateTime: "06 May 2022",
      recipient: (
        <>
          <ImageElement
            source="/payment/recipient02.png"
            className="img-fluid rounded-circle me-2 imgRecipient"
            alt="recipient01"
          />
          Gabriel Benks
        </>
      ),
      status: "pending",
      id: 6,
    },
    {
      amount: (
        <>
          <div className="price">£47.60</div>
        </>
      ),
      dateTime: "06 May 2022",
      recipient: (
        <>
          <ImageElement
            source="/payment/recipient03.png"
            className="img-fluid rounded-circle me-2 imgRecipient"
            alt="recipient01"
          />
          Gabriel Benks
        </>
      ),
      status: "cancelled",
      id: 7,
    },
    {
      amount: (
        <>
          <div className="price">£47.60</div>
        </>
      ),
      dateTime: "06 May 2022",
      recipient: (
        <>
          <ImageElement
            source="/payment/recipient04.png"
            className="img-fluid rounded-circle me-2 imgRecipient"
            alt="recipient01"
          />
          Gabriel Benks
        </>
      ),
      status: "decline",
      id: 8,
    },
    {
      amount: (
        <>
          <div className="price">£47.60</div>
        </>
      ),
      dateTime: "06 May 2022",
      recipient: (
        <>
          <ImageElement
            source="/payment/recipient05.png"
            className="img-fluid rounded-circle me-2 imgRecipient"
            alt="recipient01"
          />
          Gabriel Benks
        </>
      ),
      status: "cancelled",
      id: 9,
    },
  ],
  column: [
    {
      dataField: "amount",
      text: t("text.providerPaymentDetails.amount"),
    },
    {
      dataField: "status",
      text: t("text.providerPaymentDetails.status"),
      formatter: statusFormatter,
    },
    {
      dataField: "recipient",
      text: t("text.providerPaymentDetails.recipient"),
    },

    {
      dataField: "dateTime",
      text: t("text.providerPaymentDetails.date"),
    },
  ],
};
