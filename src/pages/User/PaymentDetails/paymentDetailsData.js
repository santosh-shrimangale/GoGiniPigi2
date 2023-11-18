import { ImageElement } from "../../../components";

export const tableColumns = [
  {
    dataField: "amount",
    text: "Amount",
  },
  {
    dataField: "status",
    text: "Status",
  },
  {
    dataField: "recipient",
    text: "Recipient",
  },
  {
    dataField: "date",
    text: "Date",
  },
];

export const tableData = [
  {
    amount: (
      <>
        <b>£47.60</b>
      </>
    ),
    status: (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge badge-sm badge-success w-95">SENT</span>
        </div>
      </>
    ),
    recipient: (
      <>
        <ImageElement
          className="img-fluid rounded-circle me-2 imgRecipient"
          source="/payment/recipient01.png"
          alt="recipient01"
        />
        Gabriel Benks
      </>
    ),
    date: (
      <>
        <span>06 May 2022</span>
      </>
    ),
  },
  {
    amount: (
      <>
        <b>£47.60</b>
      </>
    ),
    status: (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge badge-sm badge-yellow w-95">PENDING</span>
        </div>
      </>
    ),
    recipient: (
      <>
        <ImageElement
          className="img-fluid rounded-circle me-2 imgRecipient"
          source="/payment/recipient02.png"
          alt="recipient02"
        />
        Gabriel Benks
      </>
    ),
    date: (
      <>
        <span>06 May 2022</span>
      </>
    ),
  },
  {
    amount: (
      <>
        <b>£47.60</b>
      </>
    ),
    status: (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge badge-sm badge-danger w-95">CANCELLED</span>
        </div>
      </>
    ),
    recipient: (
      <>
        <ImageElement
          className="img-fluid rounded-circle me-2 imgRecipient"
          source="/payment/recipient03.png"
          alt="recipient03"
        />
        Gabriel Benks
      </>
    ),
    date: (
      <>
        <span>06 May 2022</span>
      </>
    ),
  },
  {
    amount: (
      <>
        <b>£47.60</b>
      </>
    ),
    status: (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge badge-sm badge-success w-95">SENT</span>
        </div>
      </>
    ),
    recipient: (
      <>
        <ImageElement
          className="img-fluid rounded-circle me-2 imgRecipient"
          source="/payment/recipient04.png"
          alt="recipient04"
        />
        Gabriel Benks
      </>
    ),
    date: (
      <>
        <span>06 May 2022</span>
      </>
    ),
  },
  {
    amount: (
      <>
        <b>£47.60</b>
      </>
    ),
    status: (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge badge-sm badge-light w-95">DECLINE</span>
        </div>
      </>
    ),
    recipient: (
      <>
        <ImageElement
          className="img-fluid rounded-circle me-2 imgRecipient"
          source="/payment/recipient05.png"
          alt="recipient05"
        />
        Gabriel Benks
      </>
    ),
    date: (
      <>
        <span>06 May 2022</span>
      </>
    ),
  },
];
