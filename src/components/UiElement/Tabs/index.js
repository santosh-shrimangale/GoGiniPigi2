import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { CommonButton } from "../Button";
import FilterContent from "../FilterContent";

export default function Tabs({
  tabClass,
  navClass,
  navItemClass,
  navLinkClass = "",
  tabParent = true,
  filterData = false,
  tabContent,
  parentTabClass = "",
  parentContentClass = "",
  navVariant,
  headClass = "",
  heading,
  subHeadClass,
  count,
  children,
  activeKey,
  setActiveKey,
  verticalTabs = false,
  allFilterData,
  clearAll,
  tabsName,
}) {
  const [key, setKey] = useState(
    tabContent[0].key || tabContent[0].data[0].key
  );
  const [allCategories, setAllCategories] = useState("All");
  return (
    <>
      {verticalTabs ? (
        <Tab.Container
          id="controlled-tab-example"
          defaultActiveKey={key}
          onSelect={(k) => {
            activeKey = { activeKey };
            setKey(k);
            if (setActiveKey) {
              setActiveKey(k);
            }
          }}
        >
          <div className="cmsPage_left">
            <div className="faqsideBar">
              <Nav variant={navVariant} className={`${navClass}`}>
                {tabContent.map((item) => {
                  return (
                    <>
                      {item?.category ? <h3>{item.category}</h3> : null}
                      {item.data.map((data) => (
                        <Nav.Item className={`${navItemClass}`}>
                          <Nav.Link
                            className={`${navLinkClass}`}
                            eventKey={data.key}
                          >
                            {data.name}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </>
                  );
                })}
              </Nav>
            </div>
          </div>
          <div className="cmsPage_right position-relative">
            <div>
              <CommonButton
                extraClassName="d-md-none sidetabs"
                variant="primary"
                type="button"
              >
                <em className="icon-list-view" />
              </CommonButton>
              <Tab.Content>
                {tabContent.map((item) => {
                  return item.data.map((data) => (
                    <Tab.Pane eventKey={data.key}>{data.content}</Tab.Pane>
                  ));
                })}
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      ) : tabParent ? (
        <div className={`${tabClass}`}>
          <Tab.Container
            id="controlled-tab-example"
            defaultActiveKey={key}
            activeKey={activeKey}
            onSelect={(k) => {
              setKey(k);
              if (setActiveKey) {
                setActiveKey(k);
              }
            }}
          >
            <Nav variant={navVariant} className={`${navClass}`}>
              {tabContent.map((item) => {
                return (
                  <Nav.Item className={`${navItemClass}`}>
                    <Nav.Link className={`${navLinkClass}`} eventKey={item.key}>
                      {item.name}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>

            <Tab.Content>
              {tabContent.map((item) => {
                return <Tab.Pane eventKey={item.key}>{item.content}</Tab.Pane>;
              })}
            </Tab.Content>
          </Tab.Container>
        </div>
      ) : (
        <Tab.Container
          id="controlled-tab-example"
          defaultActiveKey={tabsName}
          onSelect={(k) => setKey(k)}
        >
          <div
            className={`${headClass} d-flex justify-content-between align-items-center flex-wrap`}
          >
            <h2 className="font-md m-0">
              {heading} <span>({count})</span>
            </h2>
            <div
              className={`${subHeadClass} d-flex align-items-center flex-wrap`}
            >
              <div className="gridFilter d-flex align-items-center">
                {children}
              </div>
              <div className={`${parentTabClass}`}>
                <div className={`${tabClass}`}>
                  <Nav variant="tabs" className={`${navClass}`}>
                    {tabContent.map((item) => {
                      return (
                        <Nav.Item className={`${navItemClass}`}>
                          <Nav.Link
                            className={`${navLinkClass}`}
                            eventKey={item.key}
                            onClick={() => {
                              setAllCategories(item.name);
                            }}
                          >
                            {item.name}
                          </Nav.Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                </div>
              </div>
            </div>
          </div>
          {filterData && (
            <FilterContent
              items={35}
              allCategories={allCategories}
              allFilterData={allFilterData}
              clearAll={clearAll}
            />
          )}

          <div className={`${parentContentClass}`}>
            <Tab.Content>
              {tabContent.map((item) => {
                return <Tab.Pane eventKey={item.key}>{item.content}</Tab.Pane>;
              })}
            </Tab.Content>
          </div>
        </Tab.Container>
      )}
    </>
  );
}
