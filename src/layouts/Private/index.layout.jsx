import React, { useEffect, useState } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Footer,
  Header,
  SectionLayoutComponent,
  SideBar,
} from "../../components";
import { moduleRoutesList } from "../../routes";
import { selectUserData } from "../../redux/AuthSlice/index.slice";

import { AppLayout } from "..";

function PrivateLayout() {
  const [redirectpath, setRedirectPath] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const getmoduleRoutesList = moduleRoutesList();
  const userData = useSelector(selectUserData);

  let getPath = pathname.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  let path = getPath.replace("/", "");

  useEffect(() => {
    let pathPattern = /[\/]$/g;
    if (pathPattern.test(pathname)) {
      navigate(pathname.replace(pathPattern, ""), { replace: true });
    }
    window.scrollTo(0, 0);
    window.imageToSVG();
    window.removeBodyClass(path);
  }, [pathname]);

  let user = pathname.includes("provider") ? "provider" : "user";

  let userRole = userData?.user_type ?? user;
  useEffect(() => {
    if (redirectpath) {
      navigate(redirectpath);
    }
  }, [redirectpath]);

  const classNameUser = () => {
    switch (path) {
      case "myFavourites":
        return "beautyBox";
      case "paymentDetails":
        return "paymentSec ";

      default:
        return "";
    }
  };

  return (
    <>
      <AppLayout setRedirectPath={setRedirectPath}>
        <Header routes={getmoduleRoutesList?.[userRole]} />
        <main className={`main-content profilePage ${[path]}`}>
          <SectionLayoutComponent extraClassName="py-70 bg-55">
            <div className="d-lg-flex">
              <SideBar routes={getmoduleRoutesList?.[userRole]} />
              <div
                className={`profileCard card card-body border-0 ${
                  userRole === "provider" ? "myProfile" : classNameUser()
                }`}
              >
                <Outlet />
              </div>
            </div>
          </SectionLayoutComponent>
        </main>
        <Footer routes={getmoduleRoutesList?.[userRole]} />
      </AppLayout>
    </>
  );
}

export default PrivateLayout;
