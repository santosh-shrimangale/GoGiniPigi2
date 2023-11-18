import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Footer, Header } from "../../components";
import { moduleRoutesList } from "../../routes";
// import { routesList } from "../../routes";
import { AppLayout } from "..";
import { clearSessionStorage } from "../../utils";
import { selectUserData } from "../../redux/AuthSlice/index.slice";

function PublicLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const getmoduleRoutesList = moduleRoutesList();
  const [redirectpath, setRedirectPath] = useState("");
  const userData = useSelector(selectUserData);

  let path = pathname.replace("/", "");
  path = path === "" ? "home" : path;

  useEffect(() => {
    let pathPattern = /[\/]$/g;
    if (pathPattern.test(pathname)) {
      navigate(pathname.replace(pathPattern, ""), { replace: true });
    }
    window.scrollTo(0, 0);
    window.addBodyClass("public");
    window.removeBodyClass(path);
    clearSessionStorage();
  }, [pathname]);

  let user = pathname.includes("provider") ? "provider" : "user";

  let userRole = userData?.user_type ?? user;

  const pageClass = {
    "our-story": "ourStory",
    home: "homePage",
    hair: "bg-55 categoryPage",
    beauty: "bg-55 categoryPage",
    aesthetics: "bg-55 categoryPage",
    wellness: "bg-55 categoryPage",
    message: "messagesPage",
  };

  useEffect(() => {
    if (redirectpath) {
      navigate(redirectpath);
    }
  }, [redirectpath]);

  return (
    <>
      <AppLayout setRedirectPath={setRedirectPath}>
        {path !== "home" && <Header routes={getmoduleRoutesList?.[userRole]} />}

        <main className={`main-content ${pageClass?.[path]}`}>
          {path === "home" && (
            <Header routes={getmoduleRoutesList?.[userRole]} />
          )}
          <Outlet />
        </main>
        <Footer routes={getmoduleRoutesList?.[userRole]} />
      </AppLayout>
    </>
  );
}

export default PublicLayout;
