import React from "react";
import { Modal } from "react-bootstrap";
import ImageElement from "../ImageElement";

function ModalComponent({
  title,
  children,
  show,
  extraClassName = "",
  extraTitleClassName = "",
  onHandleVisible,
  onHandleCancel,
  closeButton = true,
  source,
}) {
  return (
    <>
      <Modal
        show={show}
        onHide={onHandleCancel}
        onHandleShow={onHandleVisible}
        backdrop="static"
        keyboard={false}
        dialogClassName={extraClassName}
        centered
      >
        <Modal.Header
          className={`border-0 ${extraTitleClassName}`}
          closeButton={closeButton}
        >
          {title ? (
            <Modal.Title>
              <h5>{title}</h5>
            </Modal.Title>
          ) : (
            ""
          )}
        </Modal.Header>

        <Modal.Body>
          {source && (
            <div className="modal-img mx-auto">
              <ImageElement source={source} extraClassName="svg img-fluid" />
            </div>
          )}
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
