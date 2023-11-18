import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import config from "../../../config";
import { getFooterLink } from "../../../utils";
import ImageElement from "../ImageElement";

function Footer({ routes }) {
  const FooterData = getFooterLink(routes);
  const { t } = useTranslation();

  const socialLinks = [
    {
      url: config.FB,
      icon: "facebook",
    },
    {
      url: config.INSTA,
      icon: "instagram",
    },
    {
      url: config.TIKTOK,
      icon: "tiktok",
    },
  ];

  return (
    <>
      <footer className="footerSec position-relative">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-3 footerSec_left">
              <div className="">
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <ImageElement
                    source="logo-white.svg"
                    className="d-block img-fluid"
                    alt="goginipig-logo"
                  />
                </Link>
                <p className="text-white">
                  {t("text.footer.footerDescription")}
                </p>
                <Link to="#" className="btn btn-light ripple-effect">
                  {t("text.common.readMore")}
                </Link>
                <div className="footerSec_left_social">
                  <span className="footerSec_left_social_title text-white d-block">
                    {t("text.footer.followUs")}
                  </span>
                  <ul className="list-unstyled list-inline mb-0">
                    {socialLinks.map((item, key) => {
                      return (
                        <li className="list-inline-item" key={key}>
                          <a href={item?.url} target="_blank" rel="noreferrer">
                            <em className={`icon-${item?.icon}`} />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 footerSec_right">
              <div className="">
                <div className="footerSec_right_contact">
                  <div className="d-sm-flex justify-content-between align-items-center txt">
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="footerSec_right_contact_title"
                    >
                      {t("text.footer.contactUs")}
                    </Link>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2 className="text-white mb-0">
                        {t("text.footer.findOutWhy")}
                      </h2>
                      <Link
                        to="#"
                        className="btn btn-primary btn-lg ripple-effect-dark footerSec_right_contact_join"
                      >
                        {t("text.common.joinUs")}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="footerSec_right_menu">
                  <div className="row g-3">
                    {FooterData.map((item, key) => {
                      return (
                        <div className="col-4 col-md-3" key={key}>
                          <h3 className="footerSec_right_menu_title text-white">
                            {item.label}
                          </h3>
                          <ul className="list-unstyled mb-0">
                            {item.children.map((childData, childKey) => {
                              return (
                                <li key={childKey}>
                                  <Link to={childData.path}>
                                    {childData.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="footerSec_right_copyright d-flex justify-content-between align-items-center">
                  <span className="footerSec_right_copyright_title text-white">
                    Copyright © 2022 GoGiniPig Limited, All Rights Reserved.
                  </span>
                  <Link
                    to="https://www.codiant.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ImageElement
                      source="codiant-logo.svg"
                      className="img-fluid"
                      alt="goginipig-logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
