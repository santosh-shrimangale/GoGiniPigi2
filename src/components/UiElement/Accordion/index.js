import React from "react";
import { Accordion } from "react-bootstrap";

function AccordionComponent({ AccordionContent, hasNumber = false }) {
  return (
    <Accordion defaultActiveKey={0}>
      {AccordionContent.map((item, key) => {
        return (
          <Accordion.Item eventKey={key} key={key}>
            <Accordion.Header>
              {` ${hasNumber ? `${key + 1}.` : ""} ${item.question}`}
            </Accordion.Header>
            <Accordion.Body>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default AccordionComponent;
