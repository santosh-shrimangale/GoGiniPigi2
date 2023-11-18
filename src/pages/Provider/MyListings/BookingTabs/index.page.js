import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ModalComponent, MyListingBlock, Tabs } from "../../../../components";

function BookingTabs({ t }) {
  const [show, setShow] = useState(false);

  const onHandleOpen = () => {
    setShow(true);
  };
  const onHandleCancel = () => {
    setShow(false);
  };
  const listing = [
    {
      portfolio: "Portfolio",
      nearly: "Nearly There",
      source: "/treatment-services.jpg",
      beauty: "Beauty",
      time: "1 h 30 mins",
      detail: "Nutritional evaluation for full overall...",
      description:
        "A full in depth and detailed consultation of your nutrition and lifestyle for optimal health",
      places: "4 Places Left",
      discountPrice: "40.60",
      price: "60.00",
    },
    {
      portfolio: "Portfolio",
      nearly: "Nearly There",
      source: "/treatment-services.jpg",
      beauty: "Beauty",
      time: "1 h 30 mins",
      detail: "Nutritional evaluation for full overall...",
      description:
        "A full in depth and detailed consultation of your nutrition and lifestyle for optimal health",
      places: "4 Places Left",
      discountPrice: "40.60",
      price: "60.00",
    },
    {
      portfolio: "Portfolio",
      nearly: "Nearly There",
      source: "/treatment-services.jpg",
      beauty: "Beauty",
      time: "1 h 30 mins",
      detail: "Nutritional evaluation for full overall...",
      description:
        "A full in depth and detailed consultation of your nutrition and lifestyle for optimal health",
      places: "4 Places Left",
      discountPrice: "40.60",
      price: "60.00",
    },
    {
      portfolio: "Portfolio",
      nearly: "Nearly There",
      source: "/treatment-services.jpg",
      beauty: "Beauty",
      time: "1 h 30 mins",
      detail: "Nutritional evaluation for full overall...",
      description:
        "A full in depth and detailed consultation of your nutrition and lifestyle for optimal health",
      places: "4 Places Left",
      discountPrice: "40.60",
      price: "60.00",
    },
    {
      portfolio: "Portfolio",
      nearly: "Nearly There",
      source: "/treatment-services.jpg",
      beauty: "Beauty",
      time: "1 h 30 mins",
      detail: "Nutritional evaluation for full overall...",
      description:
        "A full in depth and detailed consultation of your nutrition and lifestyle for optimal health",
      places: "4 Places Left",
      discountPrice: "40.60",
      price: "60.00",
    },
  ];
  const tabContent = [
    {
      name: t("text.common.hair"),
      key: "hair",
      content: (
        <div className="treatmentservice">
          <div className="beautyBox-profile p-0">
            {listing.map((list) => {
              return (
                <MyListingBlock
                  description={list.description}
                  time={list.time}
                  portfolio={list.portfolio}
                  nearly={list.nearly}
                  discountPrice={list.discountPrice}
                  price={list.price}
                  beauty={list.beauty}
                  detail={list.detail}
                  source={list.source}
                  onHandleOpen={onHandleOpen}
                />
              );
            })}
          </div>
        </div>
      ),
    },
    {
      name: t("text.common.beauty"),
      key: "beauty",
      content: (
        <div className="treatmentservice">
          <div className="beautyBox-profile p-0">
            {listing.map((list) => {
              return (
                <MyListingBlock
                  description={list.description}
                  time={list.time}
                  portfolio={list.portfolio}
                  nearly={list.nearly}
                  discountPrice={list.discountPrice}
                  price={list.price}
                  beauty={list.beauty}
                  detail={list.detail}
                  source={list.source}
                  onHandleOpen={onHandleOpen}
                />
              );
            })}
          </div>
        </div>
      ),
    },
    {
      name: t("text.common.aesthetics"),
      key: "asthetics",
      content: (
        <div className="treatmentservice">
          <div className="beautyBox-profile p-0">
            {listing.map((list) => {
              return (
                <MyListingBlock
                  description={list.description}
                  time={list.time}
                  portfolio={list.portfolio}
                  nearly={list.nearly}
                  discountPrice={list.discountPrice}
                  price={list.price}
                  beauty={list.beauty}
                  detail={list.detail}
                  source={list.source}
                  onHandleOpen={onHandleOpen}
                />
              );
            })}
          </div>
        </div>
      ),
    },
    {
      name: t("text.common.wellness"),
      key: "wellness",
      content: (
        <div className="treatmentservice">
          <div className="beautyBox-profile p-0">
            {listing.map((list) => {
              return (
                <MyListingBlock
                  description={list.description}
                  time={list.time}
                  portfolio={list.portfolio}
                  nearly={list.nearly}
                  discountPrice={list.discountPrice}
                  price={list.price}
                  beauty={list.beauty}
                  detail={list.detail}
                  source={list.source}
                  onHandleOpen={onHandleOpen}
                />
              );
            })}
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="d-sm-flex justify-content-between treatmentnav">
        <Tabs
          tabContent={tabContent}
          tabClass=""
          navClass="nav nav-tabs border-0"
          navVariant="tabs"
          navItemClass=""
          navLinkClass="nav-link border-0"
        />
        <ModalComponent
          onHandleCancel={onHandleCancel}
          show={show}
          source="/accepted.svg"
          extraClassName="mx-auto text-center position-relative"
        >
          <h4>
            {t("text.myListings.congratulations")}
            <br />
            {t("text.myListings.completedservice")}
          </h4>
          <p>
            {t("text.myListings.loremIpsum")}
            <br className="d-none d-md-block" />{" "}
            {t("text.myListings.adipiscing")}
          </p>
          <div className="modal-buttons">
            <Link
              to="#"
              className="btn btn-lg btn-primary text-white ripple-effect-dark"
            >
              {t("text.myListings.release")}
            </Link>

            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                onHandleCancel();
              }}
              className="btn-back d-flex align-items-center justify-content-center"
            >
              <em className="icon-arrow-back" />
              {t("text.myListings.back")}
            </Link>
          </div>
        </ModalComponent>
      </div>
    </>
  );
}

export default BookingTabs;
