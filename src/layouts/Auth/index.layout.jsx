import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BackButton, ImageElement } from "../../components";
import routesMap from "../../routeControl/userRouteMap";
// import { routesList } from "../../routes";
import { AppLayout } from "..";
import providerRouteMap from "../../routeControl/providerRouteMap";
import { clearSessionStorage } from "../../utils";

function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const [redirectpath, setRedirectPath] = useState("");

  let path = pathname.replace("/", "");

  useEffect(() => {
    let pathPattern = /[\/]$/g;
    if (pathPattern.test(pathname)) {
      navigate(pathname.replace(pathPattern, ""), { replace: true });
    }
    window.scrollTo(0, 0);
    window.paddingTop();
    window.addBodyClass();
    window.removeBodyClass();
    window.authHeight();
    if (pathname !== providerRouteMap.PROVIDER_PROFILE.path) {
      clearSessionStorage();
    }
  }, [pathname]);

  const backPath = {
    login: {
      pathName: routesMap.HOME.path,
      extraClassName: "",
    },
    "forgot-password": {
      pathName: routesMap.LOGIN.path,
      extraClassName: "",
    },
    "reset-password": {
      pathName: routesMap.LOGIN.path,
      extraClassName: "",
    },
    "provider-registration": {
      pathName: routesMap.LOGIN.path,
      extraClassName: "",
    },
    "provider/profile": {
      pathName: providerRouteMap.PROFILE.path,
      extraClassName: "vh-100",
    },
    registration: {
      pathName: routesMap.LOGIN.path,
      extraClassName: "",
    },
  };

  useEffect(() => {
    if (redirectpath) {
      navigate(redirectpath);
    }
  }, [redirectpath]);

  return (
    <>
      <AppLayout setRedirectPath={setRedirectPath}>
        <main className="main-content">
          <section className="authPage">
            <div className="row g-0">
              <div className="col-xl-6">
                <div className="authPage_left text-center">
                  <ImageElement
                    source="logo.svg"
                    className="authPage_left_img w-100"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="col-xl-6 position-relative">
                {/* Animesh Kumar Singh | 24-08-2022 | This back button will be hidden on treatment provider profile page once the treatment provider profile page is created */}
                {/* Remove for provider profile */}
                {path !== "provider/profile" ? (
                  <div className="authPage_backbtn d-flex justify-content-end">
                    <BackButton path={backPath?.[path]?.pathName} />
                  </div>
                ) : null}
                <div
                  className={`authPage_right d-flex align-items-center justify-content-center ${backPath?.[path]?.extraClassName}`}
                >
                  <Outlet />
                </div>
              </div>
            </div>
          </section>
        </main>
      </AppLayout>
    </>
  );
}

export default AuthLayout;
