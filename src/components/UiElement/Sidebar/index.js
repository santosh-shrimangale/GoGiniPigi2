import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSideBarData, logger, modalNotification } from "../../../utils";
import ImageElement from "../ImageElement";
import { AuthServices } from "../../../services";
import { logout, selectUserData } from "../../../redux/AuthSlice/index.slice";

function SideBar({ routes }) {
  const userData = useSelector(selectUserData);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = location;
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
      }
    } catch (error) {
      logger(error);
    }
  };
  const sideBarData = getSideBarData(routes);
  sideBarData.push({
    label: "Logout",
    icon: "/profile/logout.svg",
    path: "#",
    onClick: (e) => {
      e.preventDefault();
      accountLogout();
    },
  });

  return (
    <div className="sideBar">
      <div className="sideBar_user position-relative">
        <div className="sideBar_user_img rounded-circle  d-block mx-auto">
          <ImageElement
            previewSource={userData.profile_image_url}
            className="img-fluid rounded-circle"
            alt="profile"
          />
          <label className="d-flex align-items-center justify-content-center position-absolute">
            <em className="icon-camera text-white" />
            <input className="FileUpload1" id="FileInput" type="file" />
          </label>
        </div>
        <div className="sideBar_user_name text-center text-truncate">
          Mike Smith
        </div>
      </div>
      <div className="sideBar_tabs">
        <ul className="list-unstyled mb-0">
          {sideBarData.map((item, key) => {
            return (
              <li
                className={`d-flex align-items-center position-relative ${
                  item.path === pathname ? "active" : ""
                }`}
                key={key}
              >
                <Link to={item?.path} onClick={item.onClick}>
                  <ImageElement source={item.icon} className="svg" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
