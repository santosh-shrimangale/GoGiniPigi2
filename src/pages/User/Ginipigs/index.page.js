import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  FaqComponent,
  MainBanner,
  MetaTags,
  ImageElement,
  SectionLayoutComponent,
} from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";
import { faqTabsData } from "./faqData";

function Ginipigs() {
  const breadcrumb = [
    {
      path: routesMap.HOME.path,
      name: t("text.home.title"),
    },
    {
      path: "#",
      name: t("text.ginipigs.pageTitle"),
    },
  ];

  return (
    <>
      <MetaTags title={t("text.ginipigs.pageTitle")} />
      <main className="main-content cmsPage">
        <MainBanner
          // mainBannerClass="pageBanner-small"
          extraClassName="commonhead commonhead-small"
          breadcrumb={<Breadcrumb breadcrumb={breadcrumb} />}
          heading={t("text.ginipigs.title")}
          description={t("text.ginipigs.subTitle")}
          descriptionClassName="font-sm text-800"
        />
        <SectionLayoutComponent extraClassName="py-70">
          <div className="row">
            <div className="col-xxl-5 col-lg-6">
              <div className="commonhead">
                <h2 className="commonhead_title">Let’s Tell You More…</h2>
                <p>
                  <span className="font-sm">We </span>bridge the gap between
                  GiniPigs and Treatment & Service Providers in the{" "}
                  <span className="font-sm">Hair, Aesthetics, Beauty</span> and{" "}
                  <span className="font-sm">Wellness</span>
                  industries. Providers may be
                  <span className="font-sm">Training </span>or building their{" "}
                  <span className="font-sm">Portfolios,</span> while the GiniPig
                  enjoys <span className="font-sm">luxury</span> for a fraction
                  of the price. Treatments & Services with at least 30% off &
                  starting{" "}
                  <span className="font-sm">from only £7.50. It’s</span>
                  win-win!
                </p>
                <p>
                  Registering as one of our fabulous GiniPigs is{" "}
                  <span className="font-sm">so easy.</span> By signing up you
                  can search <span className="font-sm">amazing treats</span> and{" "}
                  <span className="font-sm">new to market treatments,</span>{" "}
                  copying your fave{" "}
                  <span className="font-sm">
                    Celebrity looks; luscious lips, volume lashes,
                  </span>{" "}
                  or take a break from it all with some{" "}
                  <span className="font-sm">Mindfulness, Yoga</span> or perhaps
                  some <span className="font-sm">Personal Training.</span>
                </p>
                <p>
                  From <span className="font-sm">Trainees</span> or{" "}
                  <span className="font-sm">Newbies</span> adding new skills to
                  their menu, to <span className="font-sm">Pro’s</span> and{" "}
                  <span className="font-sm">Stars</span> that need WOW{" "}
                  <span className="font-sm">Insta images,</span> new{" "}
                  <span className="font-sm">creative looks</span> or filling
                  last minute appointments in their diary. We’ve thought of it
                  all; we’re your <span className="font-sm">BFF’s</span> for a
                  reason
                </p>
                <p>
                  You’ll go from appointments to collecting amazing reviews in
                  the blink of an eye (framed by perfect lashes of course)!
                </p>
              </div>
            </div>
            <div className="col-xxl-6 offset-xxl-1 col-lg-6">
              <div className="text-center mb-3">
                <ImageElement
                  className="img-fluid"
                  source="/providers-img.png"
                  alt="providers-img"
                />
              </div>
            </div>
          </div>
          <div className="commonhead">
            <p>
              Register with a <span className="font-sm">gorgeous</span> profile
              picture of yourself. It will make you stand out to the Treatment &
              Service Providers you choose, so you will soon be{" "}
              <span className="font-sm">snapped up!</span>
              Once you have found the perfect treatment for you, book and
              receive instant confirmation. We have included an{" "}
              <span className="font-sm">instant filter</span> for you to search
              these available appointments. Some of our Providers may have
              specific criteria that they are looking for{" "}
              <span className="font-sm">
                (they may want to check suitability with a consultation form).
                For these appointments you will
              </span>{" "}
              send an enquiry and we will ask you for your payment details at
              this point (don’t worry no money will be taken here until your
              appointment is confirmed, it’s like a hotel reservation to show
              you are committed) all you have to do is sit back, cross your
              fingers and wait for the magic acceptance email from your chosen
              Provider.{" "}
              <span className="font-sm">
                Choose your favourite treatment, there’s nothing stopping you!
              </span>
            </p>
            <p className="mb-0">
              We’ll take care of those secure payments at this point, so there’s
              no messing around at your appointment. We’ll then send you the
              contact details of your booked Provider so you know exactly where
              you’re going. The only thing you need to think about, is if you’re
              going to leave them a tip, but we’ll leave that up to you.
            </p>
            <p>
              If you haven’t been accepted on this occasion don’t worry, this
              happens to the best of us, don’t take it personally, GiniPigs know
              a good thing when they see it and someone has probably just beat
              you to it. There is plenty more where they came from so keep those{" "}
              <span className="font-sm">eyes peeled,</span> there is no limit to
              how many you can book.
            </p>
            <p>
              At the end of your appointment, we know your Provider will have
              appreciated your{" "}
              <span className="font-sm">patience, friendliness</span> and the
              fact that you were <span className="font-sm">on time,</span> they
              will be reviewing you, so don’t be late! You’ll be asked to leave
              them a review too. This allows both the GiniPig & Provider to have
              the best possible experience in our platform. You’ll love how easy
              it is to feel a <span className="font-sm">million dollars</span>{" "}
              and get those celebrity ‘must have’ treatments at a fraction of
              the price - by fraction we mean{" "}
              <span className="font-sm">at least 30% off the RRP. </span>
            </p>
            <p className="font-sm mb-0">We’ve put the treat into treatment!</p>
          </div>
          <div className="commonhead_button d-flex">
            <Link
              to="/login"
              className="btn btn-primary ripple-effect-dark btn-lg"
            >
              {t("text.ginipigs.letsGo")}
            </Link>
          </div>
        </SectionLayoutComponent>
        <SectionLayoutComponent extraClassName="providerPage_platform py-70">
          <div className="commonhead text-center">
            <span className="commonhead_subtitle text-uppercase">
              How did you manage without us
            </span>
            <h2 className="commonhead_title mb-0">The Perfect Platform</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="text-center providerPage_platform_inner">
                <ImageElement
                  className="img-fluid svg"
                  source="/treat-yourself.svg"
                  alt="treat-yourself"
                />
                <h3 className="font-bd">Treat Yourself</h3>
                <p className="font-lt mb-0">
                  From Only £7.50 and always a minimum of 30% off choose between
                  Balyage, Bikram, Botox, Brows & everything in between. What
                  will your treat be?
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="text-center providerPage_platform_inner">
                <ImageElement
                  className="img-fluid svg"
                  source="/luxury.svg"
                  alt="luxury"
                />
                <h3 className="font-bd">Luxury for Less</h3>
                <p className="font-lt mb-0">
                  Let us inspire you with the latest treatments. No more envying
                  celebrities or friends, we`&apos;`ve made these luxury
                  must-haves a reality but without the price tag.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="text-center providerPage_platform_inner">
                <ImageElement
                  className="img-fluid svg"
                  source="/payday.svg"
                  alt="payday"
                />

                <h3 className="font-bd">No need to wait `&apos;`til Payday</h3>
                <p className="font-lt mb-0">
                  Secure your appointment with only a
                  <br className="d-none d-lg-block" />
                  15% deposit.
                </p>
              </div>
            </div>
          </div>
          <div className="commonhead_button d-flex justify-content-center">
            <Link to="#" className="btn btn-primary ripple-effect-dark btn-lg">
              {t("text.common.bookAppointment")}
            </Link>
          </div>
        </SectionLayoutComponent>
        <SectionLayoutComponent extraClassName="providerPage_faqs bg-55 py-70">
          <div className="commonhead text-center">
            <h2 className="commonhead_title">{t("text.faq.title")}</h2>
          </div>
          <FaqComponent faqData={faqTabsData} />
        </SectionLayoutComponent>
      </main>
    </>
  );
}

export default Ginipigs;
