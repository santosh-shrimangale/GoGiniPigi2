import React from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import {
  ImageElement,
  MetaTags,
  MyListingBlock,
  StarRate,
  MyLikesBlock,
  Portfolio,
} from "../../../components";

import providerMyProfileData, {
  myLikesData,
  imageData,
} from "./providerMyProfileData";

function Profile() {
  return (
    <>
      <MetaTags title={t("text.providerMyProfile.title")} />
      <div className="myProfile">
        <div className="myProfile_card card border-0 flex-sm-row justify-content-between align-items-start">
          <div className="d-sm-flex align-items-center w-100">
            <div className="myProfile_card_profile overflow-hidden rounded-circle d-block">
              <ImageElement
                source="appointment-profile.png"
                className="img-fluid rounded-circle"
                alt="user-profile"
              />
            </div>
            <div className="myProfile_card_data">
              <h1>Rebecca Smith</h1>
              <ul className="list-unstyled d-flex flex-wrap mb-0">
                <li>
                  <em className="icon-location" />
                  32, Bristol, BS48 3DY
                </li>
                <li>
                  <em className="icon-email" />
                  xyz@gmail.com
                </li>
                <li>
                  <em className="icon-phone" />
                  021 0214 25444
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-end action">
            <p className="mb-0">
              <Link to="#" className="text-400 font-md addnew">
                {t("text.providerMyProfile.editProfile")}
              </Link>
            </p>
            <button
              className="btn btn-primary d-lg-none sidebarMenu ms-2 ms-md-3"
              type="button"
            >
              <em className="icon-user" />
            </button>
          </div>
        </div>
        <div className="myProfile_card card border-0">
          <div className="beautyTitle d-flex flex-wrap align-items-center justify-content-between">
            <h2 className=" mb-0">
              {t("text.providerMyProfile.activeListings")}
            </h2>
            <div className="d-flex align-items-center justify-content-end ms-auto">
              <p className="mb-0">
                <Link to="#" className="text-400 font-md addnew">
                  {t("text.providerMyProfile.createAppointment")}
                </Link>
              </p>
            </div>
          </div>
          {providerMyProfileData.map((data) => (
            <MyListingBlock
              source={data.source}
              instant={data.instant}
              beauty={data.beauty}
              time={data.time}
              detail={data.detail}
              description={data.description}
              portfolio={data.portfolio}
              nearly={data.nearly}
              places={data.places}
              discountPrice={data.discountPrice}
              status={data.status}
              price={data.price}
            />
          ))}
        </div>
        <div className="myProfile_card card border-0">
          <div className="uploadStuff form-group mb-0">
            <div className="beautyTitle d-flex justify-content-between">
              <h2 className="mb-0">
                {t("text.providerMyProfile.myPortfolio")}
              </h2>
              <p className="mb-0">
                <Link to="#" className="text-400 font-md addnew">
                  {t("text.providerMyProfile.editPortfolio")}
                </Link>
              </p>
            </div>
            <ul className="uploadStuff_multi d-flex flex-wrap flex-wrap list-unstyled">
              {imageData.map((data) => (
                <Portfolio imgsource={data.source} />
              ))}
            </ul>
          </div>
        </div>
        <div className="myProfile_card card border-0">
          <div className="beautyTitle d-flex flex-wrap align-items-center justify-content-between">
            <h2 className=" mb-0">{t("text.providerMyProfile.reviews")}</h2>
          </div>
          <div className="myProfile_reviews d-flex align-items-center flex-wrap">
            <div className="myProfile_reviews_col">
              <h3>{t("text.providerMyProfile.professionalism")}</h3>
              <div>
                <span>
                  <StarRate />
                </span>
              </div>
            </div>
            <div className="myProfile_reviews_col">
              <h3>{t("text.providerMyProfile.friendliness")}</h3>
              <div>
                <span>
                  <StarRate />
                </span>
              </div>
            </div>
            <div className="myProfile_reviews_col">
              <h3>{t("text.providerMyProfile.reliability")}</h3>
              <div>
                <span>
                  <StarRate />
                </span>
              </div>
            </div>
            <div className="myProfile_reviews_col">
              <h3>{t("text.providerMyProfile.results")}</h3>
              <div>
                <span>
                  <StarRate />
                </span>
              </div>
            </div>
            <div className="myProfile_reviews_col">
              <div className="rating d-flex justify-content-center align-items-center ms-auto">
                <ImageElement source="/star-rate.svg" /> 4.5
              </div>
            </div>
          </div>
          <p className="reviewnote text-400 font-bk mb-0">
            No reviews yet, hopefully you will soon. GiniPigs will leave reviews
            once they have attended their appointment
          </p>
        </div>
        <div className="myProfile_card card border-0">
          <div className="beautyTitle d-flex flex-wrap align-items-center justify-content-between">
            <h2 className=" mb-0">{t("text.providerMyProfile.myLikes ")}</h2>
            <div className="d-flex align-items-center justify-content-end ms-auto" />
          </div>
          {myLikesData.map((data) => (
            <MyLikesBlock
              description={data.description}
              time={data.time}
              portfolio={data.portfolio}
              nearly={data.nearly}
              beauty={data.beauty}
              source={data.source}
              detail={data.detail}
              likes={data.likes}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Profile;
