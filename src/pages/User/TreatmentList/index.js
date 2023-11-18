import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Breadcrumb,
  CategorySection,
  MainBanner,
  MetaTags,
  Search,
  SectionLayoutComponent,
  Tabs,
  VerticalViewComponent,
  GridViewComponent,
} from "../../../components";

import { allData } from "./allData";
import routesMap from "../../../routeControl/userRouteMap";

function TreatmentList() {
  const [view, setView] = useState(true);
  const { t } = useTranslation();
  const [allFilterData, setAllFilterData] = useState([]);
  let location = useLocation();
  let tabsName = "all";
  let metaTagsLocation = () => {
    switch (location.pathname) {
      case "/hair":
        return t("text.common.hair");
      case "/beauty":
        return t("text.common.beauty");
      case "/aesthetics":
        return t("text.common.aesthetics");
      case "/wellness":
        return t("text.common.wellness");
      default:
        return "Hair";
    }
  };

  const alldatahtml = (
    <>
      {view ? (
        allData.map((data) => {
          return (
            <VerticalViewComponent
              categoryImage={data.categoryImage}
              time={data.time}
              detail={data.detail}
              description={data.description}
              portfolio={data.portfolio}
              nearly={data.nearly}
              places={data.places}
              status={data.status}
              discountPrice={data.discountPrice}
              price={data.price}
              name={data.name}
              address={data.address}
              address2={data.address2}
              rating={data.rating}
              count={data.count}
              beauty={data.beauty}
              instant={data.instant}
            />
          );
        })
      ) : (
        <>
          <div className="gridBox">
            <div className="row g-3">
              {allData.map((data) => {
                return (
                  <GridViewComponent
                    categoryImage={data.categoryImage}
                    heading={data.heading}
                    time={data.time}
                    detail={data.detail}
                    description={data.description}
                    portfolio={data.portfolio}
                    nearly={data.nearly}
                    discountPrice={data.discountPrice}
                    price={data.price}
                    places={data.places}
                    count={data.count}
                    name={data.name}
                    address={data.address}
                    userImage={data.userImage}
                    rating={data.rating}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
  const breadcrumb = [
    {
      path: routesMap.HOME.path,
      name: t("text.home.title"),
    },
    {
      path: "#",
      name: t("text.common.treatments"),
    },
  ];

  const tabContent = [
    {
      name: t("text.common.all"),
      key: "all",
      content: alldatahtml,
    },
    {
      name: t("text.common.hair"),
      key: "hair",
      content: alldatahtml,
    },
    {
      name: t("text.common.beauty"),
      key: "beauty",
      content: alldatahtml,
    },
    {
      name: t("text.common.aesthetics"),
      key: "aesthetics",
      content: alldatahtml,
    },
    {
      name: t("text.common.wellness"),
      key: "wellness",
      content: alldatahtml,
    },
  ];

  const getFilterData = (e) => {
    setAllFilterData(allFilterData.concat({ name: e }));
  };

  const clearAll = () => {
    setAllFilterData([]);
  };

  return (
    <>
      <MetaTags title={metaTagsLocation()} />
      <MainBanner
        extraClassName="commonhead commonhead-small"
        breadcrumb={<Breadcrumb breadcrumb={breadcrumb} />}
        heading={t("text.treatmentList.heading")}
        headings={t("text.treatmentList.headings")}
      />
      <div className="searchMode">
        <div className="container">
          <Search />
        </div>
      </div>
      <SectionLayoutComponent extraClassName="categorySec">
        <hr className="divider" />
        <div className="row g-3">
          <div className="col-xl-3 filter">
            <CategorySection getFilterData={getFilterData} t={t} />
          </div>
          <div className="col-xl-9 cateWrapper">
            <Tabs
              tabContent={tabContent}
              headClass="tabHeader"
              subHeadClass="tabHeader_right"
              heading="Available Treatments"
              count="35"
              tabParent={false}
              filterData
              tabClass="customTabs mb-0"
              navClass="nav nav-tabs border-0"
              navItemClass="nav-item"
              navLinkClass="nav-link text-center position-relative"
              allFilterData={allFilterData}
              clearAll={clearAll}
              tabsName={tabsName}
            >
              <Link
                to="#"
                className={`"list-view" ${view ? "activer" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setView(true);
                }}
              >
                <em className="icon-list-view" />
              </Link>
              <Link
                to="#"
                className={`"grid-view" ${view ? "" : "activer"}`}
                onClick={(e) => {
                  e.preventDefault();
                  setView(false);
                }}
              >
                <em className="icon-grid-view" />
              </Link>
              {/* <Link to="#" className="d-xl-none d-flex" onClick="filterOpen()">
                <em className="icon-filter" />
              </Link> */}
            </Tabs>
          </div>
        </div>
      </SectionLayoutComponent>
    </>
  );
}

export default TreatmentList;
