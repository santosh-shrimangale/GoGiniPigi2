import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { ImageElement } from "..";

function DropdownMenu({
  heading,
  menuList,
  mainClassName,
  linkClassName,
  menuClassName,
  listClassName,
  dropdownType = "profile",
  loading,
  toggleClassName = "",
}) {
  return (
    <>
      <Dropdown className={mainClassName}>
        <Dropdown.Toggle variant="none" as="a" className={toggleClassName}>
          {heading}
        </Dropdown.Toggle>

        <Dropdown.Menu as="ul" className={menuClassName}>
          {menuList.map((item, key) => {
            return (
              <Dropdown.Item className={listClassName} as="li" key={key}>
                <Link
                  className={linkClassName}
                  to={item?.path}
                  onClick={item?.onClick}
                  disabled={loading}
                >
                  {dropdownType === "profile" ? (
                    <>
                      {item?.label}
                      <span className="icon-dropdown-arrow-right" />
                    </>
                  ) : (
                    <>
                      <div className="mainHeader_notification_pic">
                        <ImageElement
                          className="img-fluid"
                          source="notification-01.jpg"
                          alt="profile"
                        />
                      </div>
                      <div className="mainHeader_notification_ctn">
                        Lorem ipsum dolor sit amet consec
                      </div>
                      <div className="mainHeader_notification_info">
                        <p>Just Now</p>
                      </div>
                    </>
                  )}
                </Link>
              </Dropdown.Item>
            );
          })}
          {dropdownType === "notification" && (
            <div className="text-center">
              <Link to="#" className="viewall">
                VIEW ALL
              </Link>
            </div>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default DropdownMenu;
