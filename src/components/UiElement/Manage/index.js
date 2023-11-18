import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ImageElement, SectionLayoutComponent } from "..";

function Manage({ extraClassName }) {
  const { t } = useTranslation();
  return (
    <>
      <SectionLayoutComponent extraClassName={`${extraClassName}`}>
        <div className="commonhead text-center">
          <span className="commonhead_subtitle text-uppercase">
            How did you manage without us
          </span>
          <h2 className="commonhead_title">The Perfect Combo....</h2>
        </div>
        <div className="perfectComboSec_inner">
          <div className="row gx-3 gx-xl-5">
            <div className="col-lg-4 order-2 order-lg-1">
              <div className="perfectComboSec_left">
                <div className="perfectComboSec_left_box d-flex align-items-start">
                  <div className="text-lg-end text-start perfectComboSec_left_content order-2 order-lg-1">
                    <h3 className="font-bd">Find Models & New Clients</h3>
                    <p className="font-lt mb-0">
                      Whether you need models for training, case studies or your
                      portfolio weve got you covered. Dazzle them with your
                      skills and transform those models into potential clients.
                    </p>
                  </div>
                  <div className="perfectComboTag order-1 order-lg-2">
                    <ImageElement
                      className="img-fluid svg"
                      source="new-clients.svg"
                      alt="new-clients"
                    />
                  </div>
                </div>
                <div className="perfectComboSec_left_box d-flex align-items-start">
                  <div className="text-lg-end text-start perfectComboSec_left_content order-2 order-lg-1">
                    <h3 className="font-bd">Earn as you Grow</h3>
                    <p className="font-lt mb-0">
                      We take secure payment on your behalf, no more freebies
                      for family & friends. Raise your income with GiniPigs and
                      If they cancel last minute we soften the blow financially.
                    </p>
                  </div>
                  <div className="perfectComboTag order-1 order-lg-2">
                    <ImageElement
                      className="img-fluid svg"
                      source="earn-grow.svg"
                      alt="earn-grow"
                    />
                  </div>
                </div>
                <div className="perfectComboSec_left_box d-flex align-items-start">
                  <div className="text-lg-end text-start perfectComboSec_left_content order-2 order-lg-1">
                    <h3 className="font-bd">Extend Your Portfolio</h3>
                    <p className="font-lt mb-0">
                      Get new clients through your door and save your portfolio
                      images. Great for you to see how you have progressed &
                      easily showcase to future employers or clients.
                    </p>
                  </div>
                  <div className="perfectComboTag order-1 order-lg-2">
                    <ImageElement
                      className="img-fluid svg"
                      source="portfolio.svg"
                      alt="portfolio"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 align-self-center text-center">
              <div className="perfectComboSec_center">
                <ImageElement
                  className="img-fluid"
                  source="perfect-combo.png"
                  alt="perfect-combo"
                />
              </div>
            </div>
            <div className="col-lg-4 order-3 order-lg-3">
              <div className="perfectComboSec_right">
                <div className="perfectComboSec_right_box d-flex align-items-start">
                  <div className="perfectComboTag">
                    <ImageElement
                      className="img-fluid svg"
                      source="treat-yourself.svg"
                      alt="treat-yourself"
                    />
                  </div>
                  <div className="text-start perfectComboSec_right_content">
                    <h3 className="font-bd">Treat Yourself</h3>
                    <p className="font-lt mb-0">
                      From Only £7.50 and always a minimum of 30% off choose
                      between Balyage, Bikram, Botox, Brows & everything in
                      between. What will your treat be?
                    </p>
                  </div>
                </div>
                <div className="perfectComboSec_right_box d-flex align-items-start">
                  <div className="perfectComboTag">
                    <ImageElement
                      className="img-fluid svg"
                      source="luxury.svg"
                      alt="luxury"
                    />
                  </div>
                  <div className="text-start perfectComboSec_right_content">
                    <h3 className="font-bd">Luxury for Less</h3>
                    <p className="font-lt mb-0">
                      Let us inspire you with the latest treatments. No more
                      envying celebrities or friends, weve made these luxury
                      must-haves a reality and but without the price tag.
                    </p>
                  </div>
                </div>
                <div className="perfectComboSec_right_box d-flex align-items-start">
                  <div className="perfectComboTag">
                    <ImageElement
                      className="img-fluid svg"
                      source="payday.svg"
                      alt="payday"
                    />
                  </div>
                  <div className="text-start perfectComboSec_right_content">
                    <h3 className="font-bd">No need to wait til Payday</h3>
                    <p className="font-lt mb-0">
                      Secure your appointment with only a{" "}
                      <br className="d-none d-lg-block" />
                      15% deposit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="perfectComboSec_bottom text-center">
            <h4 className="font-sm">
              Our Review Feature Makes <br className="d-none d-lg-block" />
              It Easier To Choose.
            </h4>
            <div className="commonhead_button">
              <Link to="#" className="btn btn-yellow ripple-effect-dark btn-lg">
                {t("text.common.findMeGinipigs")}
              </Link>
              <Link
                to="#"
                className="btn btn-primary ripple-effect-dark btn-lg"
              >
                {" "}
                {t("text.common.bookAppointment")}
              </Link>
            </div>
          </div>
        </div>
      </SectionLayoutComponent>
    </>
  );
}

export default Manage;
