import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";

function BeautyTabComponent({
  tabClass,
  navClass,
  navItemClass,
  navLinkClass = "",
  tabContent,
  parentTabClass = "",
  parentContentClass = "",
  heading,
  activeKey,
  setActiveKey,
}) {
  const [key, setKey] = useState(tabContent[0].key);
  return (
    <>
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
        <div className="beautyCard_head d-md-flex justify-content-between align-items-center">
          <div className="commonhead">
            <h2 className="commonhead_title mb-0">{heading}</h2>
          </div>

          <div className={`${parentTabClass}`}>
            <div className={`${tabClass}`}>
              <Nav variant="pills" className={`${navClass}`}>
                {tabContent.map((item) => {
                  return (
                    <Nav.Item className={`${navItemClass}`}>
                      <Nav.Link
                        className={`${navLinkClass}`}
                        eventKey={item.key}
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
        <div className={`${parentContentClass}`}>
          <Tab.Content>
            {tabContent.map((item) => {
              return <Tab.Pane eventKey={item.key}>{item.content}</Tab.Pane>;
            })}
          </Tab.Content>
        </div>
      </Tab.Container>
    </>
  );
}

export default BeautyTabComponent;
