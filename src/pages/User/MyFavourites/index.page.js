import { t } from "i18next";
import React from "react";
import { MetaTags, VerticalViewComponent } from "../../../components";
import myFavouriteData from "./myFavouriteData";

function MyFavourites() {
  return (
    <>
      <MetaTags title={t("text.myFavourites.title")} />
      <div className="profileCard_heading d-flex align-items-center justify-content-between">
        <h1 className="profileCard_heading_title mb-0">
          {t("text.myFavourites.title")}
        </h1>
        <button className="btn btn-primary d-lg-none sidebarMenu" type="button">
          <em className="icon-user" />
        </button>
      </div>
      {myFavouriteData.map((data) => (
        <VerticalViewComponent
          extraClassName="beautyBox_items_border "
          beauty={data.beauty}
          instant={data.instant}
          categoryImage={data.categoryImage}
          heading={data.heading}
          time={data.time}
          detail={data.detail}
          description={data.description}
          portfolio={data.portfolio}
          nearly={data.nearly}
          places={data.places}
          discountPrice={data.discountPrice}
          status={data.status}
          price={data.price}
          name={data.name}
          address={data.address}
          address2={data.address2}
          rating={data.rating}
          count={data.count}
        />
      ))}
    </>
  );
}

export default MyFavourites;
