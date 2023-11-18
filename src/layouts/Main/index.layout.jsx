import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { routesList } from "../../routes";
// import { AppLayout } from "..";

function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  useEffect(() => {
    let pathPattern = /[\/]$/g;
    if (pathPattern.test(pathname)) {
      navigate(pathname.replace(pathPattern, ""), { replace: true });
    }
    window.scrollTo(0, 0);
    window.paddingTop();
    let { body } = document;
    let scrollDown = "scroll-down";
    if (body.classList.contains(scrollDown)) {
      body.classList.remove(scrollDown);
    }
  }, [pathname]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default MainLayout;
