import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CommonButton } from "../Button";

function ActionDropdown({ options }) {
  const [dropShow, setDropShow] = useState(false);
  function getButton(data) {
    let element;
    if (data.action === "redirect") {
      element = (
        <Link
          to={data.path}
          className="d-flex align-items-center justify-content-between"
        >
          {data.name}
        </Link>
      );
    } else if (data.action === "modal") {
      element = (
        <a data-toggle="modal" href={data.path}>
          {data.name}
        </a>
      );
    } else if (data.action === "confirm") {
      element = (
        <Link
          className="d-flex align-items-center justify-content-between"
          to="#"
          onClick={(e) => {
            e.preventDefault();
            data.onClickHandle();
          }}
        >
          {data.name}
        </Link>
      );
    }

    return element;
  }
  return (
    <>
      <div className="dropdown text-end">
        <CommonButton
          to="#"
          className="dropdown-toggle border-0 bg-transparent"
          data-toggle="dropdown"
          onClick={(e) => {
            e.preventDefault();
            setDropShow(!dropShow);
          }}
        >
          <em className="icon-more" />
        </CommonButton>
        <div
          className={`dropdown-menu dropdown-menu-end dropdown-menu-xs mb-0 ${
            dropShow ? "show" : ""
          }`}
          // className="dropdown-menu dropdown-menu-end dropdown-menu-xs mb-0"
        >
          <ul className="dropdown-list list-unstyled mb-0">
            {options.map((item, key) => {
              return (
                <li className="dropdown-list-item" key={key}>
                  {getButton(item)}{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ActionDropdown;
