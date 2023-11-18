// import { useState } from "react";

import config from "../../../config";
import ActionDropdown from "../ActionDropdown";

export const checkValidData = (data) => {
  return data || "-";
};
export const checkValidCount = (data) => {
  return <>{data || 0}</>;
};

export const checkValidPrice = (data) => {
  return <>{data ? `£ ${data}` : "-"}</>;
};

export const cssUrls = (data) => {
  return `${config.IMAGE_URL}/${data}`;
};

export const statusFormatter = (cell) => {
  const successArr = ["sent", "completed"];
  const failedArr = ["cancelled"];
  const onGoingArr = ["pending"];
  const decline = ["decline"];
  const left = ["day", "days"];
  const noShow = ["noShow"];

  const statusArr = {
    sent: "SENT",
    pending: "PENDING",
    cancelled: "CANCELLED",
    completed: "COMPLETED",
    decline: "Decline",
    day: "Day left",
    days: "Days left",
    noShow: "No Show",
  };
  let data;

  if (successArr.includes(cell)) {
    data = (
      <span className="badge badge-sm badge-success w-95">
        {statusArr?.[cell]}
      </span>
    );
  } else if (failedArr.includes(cell)) {
    data = (
      <span className="badge badge-sm badge-danger w-95">
        {statusArr?.[cell]}
      </span>
    );
  } else if (onGoingArr.includes(cell)) {
    data = (
      <span className="badge badge-sm badge-yellow w-95">
        {statusArr?.[cell]}
      </span>
    );
  } else if (decline.includes(cell)) {
    data = (
      <span className="badge badge-sm badge-light w-95">
        {statusArr?.[cell]}
      </span>
    );
  } else if (left.includes(cell)) {
    data = <span className="badge badge-primary">{statusArr?.[cell]}</span>;
  } else if (noShow.includes(cell)) {
    data = <span className="badge badge-light">{statusArr?.[cell]}</span>;
  }

  return data;
};

export const actionFormatter = (options) => {
  return (
    <>
      <ActionDropdown options={options} />
    </>
  );
};
