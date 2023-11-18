import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ImageElement from "../ImageElement";
import SectionLayoutComponent from "../SectionLayoutComponent";

function DefinationComponent() {
  const { t } = useTranslation();
  return (
    <SectionLayoutComponent extraClassName="py-70 pt-0">
      <div className="container align-items-center">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xl-6">
            <div className="text-center mb-lg-0 mb-3">
              <ImageElement
                className="img-fluid"
                source="ginipig-definition.png"
                alt="ginipig-definition"
              />
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <div className="commonhead">
              <h2 className="commonhead_title">
                {t("text.ourStory.defination")}
              </h2>
              <p>
                Traditionally called &apos;models&apos;, a GiniPig is a fabulous
                person who enables Providers to perfect their skills, whether
                they&apos;re new to their Industry or Pro&apos;s. We
                affectionately call them GiniPigs as they are worthy of their
                own new title. They can spot a fab opportunity when they see it.
              </p>
              <div className="commonhead_list d-flex">
                <div className="commonhead_list_img">
                  <ImageElement
                    className="img-fluid svg"
                    source="registering.svg"
                    alt="registering"
                  />
                </div>
                <div className="commonhead_list_title">
                  <h3 className="font-bd">
                    Registering as one of our fabulous GiniPigs
                  </h3>
                  <p className="font-lt mb-0">
                    By signing up you can search amazing treats and new to
                    market treatments, copying your fave Celebrity looks
                  </p>
                </div>
              </div>
              <div className="commonhead_list d-flex">
                <div className="commonhead_list_img">
                  <ImageElement
                    className="img-fluid svg"
                    source="treat-yourself.svg"
                    alt="treat-yourself"
                  />
                </div>
                <div className="commonhead_list_title">
                  <h3 className="font-bd">
                    We are your BFF&apos;s for a reason
                  </h3>
                  <p className="font-lt mb-0">
                    From Trainees or Newbies adding new skills to their menu, to
                    Pro&apos;s and Stars that need WOW Insta images, new
                    creative looks
                  </p>
                </div>
              </div>
              <div className="d-flex commonhead_button flex-wrap">
                <Link
                  to="/login"
                  className="btn btn-primary ripple-effect-dark btn-lg mb-2 mb-sm-0"
                >
                  {t("text.ourStory.appointment")}
                </Link>
                <Link
                  to="#"
                  className="readmore d-flex align-items-center justify-content-center position-relative readmore-left"
                >
                  <span>{t("text.ourStory.read")}</span>
                  <em className="icon-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayoutComponent>
  );
}

export default DefinationComponent;
