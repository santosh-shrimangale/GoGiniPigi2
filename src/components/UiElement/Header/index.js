import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import routesMap from "../../../routeControl/userRouteMap";
import {
  getHeaderData,
  getLocalStorageToken,
  logger,
  modalNotification,
} from "../../../utils";
import ImageElement from "../ImageElement";
import { logout, selectUserData } from "../../../redux/AuthSlice/index.slice";
import HeaderDropdownMenu from "../HeaderDropdown";
import moduleRoutesMap from "../../../routeControl";
import { AuthServices } from "../../../services";

function Header({ routes }) {
  const location = useLocation();
  const { pathname } = location;
  const headerData = getHeaderData(routes);
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState("");
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const userToken = getLocalStorageToken();

  useEffect(() => {
    setExpanded("");
    setShow(false);
  }, [pathname]);

  const accountLogout = async () => {
    try {
      const response = await AuthServices.logoutService();
      const { message } = response;
      if (message) {
        modalNotification({
          type: "success",
          message,
        });
        dispatch(logout(navigate));
        setLoading(false);
      }
    } catch (error) {
      logger(error);
    }
    setLoading(false);
  };

  const dropDownList = [
    {
      label: "My Profile",
      path: moduleRoutesMap?.[userData?.user_type]?.PROFILE?.path,
    },
    {
      label: "Logout",
      path: "#",
      onClick: (e) => {
        e.preventDefault();
        accountLogout();
      },
    },
  ];

  return (
    <>
      <header className="mainHeader position-fixed w-100">
        <Navbar
          expand="lg"
          variant="none"
          className="navbar nav"
          onToggle={() => setShow(!show)}
          collapseOnSelect
          expanded={expanded}
        >
          <Container>
            <Link className="navbar-brand p-0 me-0" to={routesMap.HOME.path}>
              <ImageElement
                source="logo.svg"
                className="img-fluid"
                alt="midas-logo"
              />
            </Link>
            {userToken ? (
              <ul className="mainHeader_menu order-lg-last mb-0 d-flex align-items-center list-unstyled">
                <li className="mainHeader_notification">
                  <HeaderDropdownMenu
                    mainClassName=""
                    linkClassName="d-flex align-items-stretch justify-content-start"
                    menuClassName="dropdown-menu-end dropdown-list list-unstyled"
                    listClassName="dropdown-list-item px-0"
                    dropdownType="notification"
                    toggleClassName="mainHeader_notification_icon d-flex align-items-center justify-content-center border-0 rounded-circle"
                    heading={
                      <>
                        <span className="position-relative d-flex">
                          <em className="icon-notification" />
                        </span>
                      </>
                    }
                    menuList={dropDownList}
                  />
                </li>
                <li>
                  <Link
                    to={routesMap.MY_FAVOURITES.path}
                    className="d-flex align-items-center justify-content-center mainHeader_likeicon"
                  >
                    <em className="icon-likes" />
                  </Link>
                </li>
                <li>
                  <div className="mainHeader_profile">
                    <HeaderDropdownMenu
                      mainClassName=""
                      linkClassName="d-flex align-items-center justify-content-between"
                      menuClassName="dropdown-menu-end dropdown-list list-unstyled"
                      listClassName="dropdown-list-item px-0"
                      loading={loading}
                      heading={
                        <ImageElement
                          previewSource={userData.profile_image_url}
                          className="img-fluid user_profile_sm"
                          alt="profile"
                        />
                      }
                      menuList={dropDownList}
                    />
                  </div>
                </li>
              </ul>
            ) : (
              <Link
                to={routesMap.LOGIN.path}
                className="btn ripple-effect-dark btn-primary order-lg-last"
              >
                {t("text.common.login")}
              </Link>
            )}
            <Navbar.Toggle
              aria-controls="navbarSupportedContent"
              aria-expanded={!!show}
              className="toggleMenu d-lg-none d-flex"
              onClick={() => {
                setShow(!show);
                setExpanded((prev) => (prev === "" ? "expanded" : ""));
              }}
            >
              <span className="icon-menu" />
            </Navbar.Toggle>
            <Navbar.Collapse
              className="flex-grow-0"
              id="navbarSupportedContent"
            >
              <Nav as="ul">
                {headerData.map((item, key) => {
                  return (
                    <li
                      className={`nav-item ${
                        item.path === pathname ? "active" : ""
                      }`}
                      key={key}
                    >
                      <Nav.Link
                        as={Link}
                        className="nav-link p-0"
                        to={item.path}
                        href="#"
                      >
                        {item.label}
                      </Nav.Link>
                    </li>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
