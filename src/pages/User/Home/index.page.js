import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Pagination, Autoplay } from "swiper";
import { SwiperSlide } from "swiper/react";
import {
  MetaTags,
  cssUrls,
  SwiperSlider,
  SectionLayoutComponent,
  ImageElement,
  Manage,
  ProviderSection,
  BeautyComponent,
  BeautyTabComponent,
  BlockComponent,
  Tabs,
  Search,
} from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";
import { dateFormatter } from "../../../utils";

function Home() {
  const { t } = useTranslation();

  const knowMoreContent = [
    {
      id: 1,
      source: "/browzing-img-1.jpg",
      description: "Esthetician Recommended Skin Care Products for Aging Skin",
      date: "Summer 2022",
    },
    {
      id: 2,
      source: "/browzing-img-1.jpg",
      description: "Esthetician Recommended Skin Care Products for Aging Skin",
      date: "Summer 2022",
    },
    {
      id: 3,
      source: "/browzing-img-1.jpg",
      description: "Esthetician Recommended Skin Care Products for Aging Skin",
      date: "Summer 2022",
    },
    {
      id: 4,
      source: "/browzing-img-1.jpg",
      description: "Esthetician Recommended Skin Care Products for Aging Skin",
      date: "Summer 2022",
    },
  ];

  const tabContent = [
    {
      name: "All",
      key: "all",
      content: (
        <SwiperSlider
          slidesPerView={3}
          spaceBetween={30}
          className="swiper-container beautyCard_swiper swiper-container-horizontal"
        >
          <SwiperSlide
            className="swiper-slide"
            style={{ width: "556.333px", marginRight: "30px" }}
          >
            <BeautyComponent
              name="rabicca"
              heading="Beauty"
              description="Nutritional evaluation for full overall"
              portfolio="Portfolio"
              places="4 Places Left"
              nearly="Nearly There"
              discountPrice="40.60"
              price="60.00"
              rating={4}
              address="Salon, CV37
  Stratford-upon-Avon"
            />
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide"
            style={{ width: "556.333px", marginRight: "30px" }}
          >
            <BeautyComponent
              name="rabicca"
              heading="Beauty"
              description="Nutritional evaluation for full overall"
              portfolio="Portfolio"
              places="4 Places Left"
              nearly="Nearly There"
              discountPrice="40.60"
              price="60.00"
              rating={4}
              address="Salon, CV37
  Stratford-upon-Avon"
            />
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide"
            style={{ width: "556.333px", marginRight: "30px" }}
          >
            <BeautyComponent
              name="rabicca"
              heading="Beauty"
              description="Nutritional evaluation for full overall"
              portfolio="Portfolio"
              places="4 Places Left"
              nearly="Nearly There"
              discountPrice="40.60"
              price="60.00"
              rating={4}
              address="Salon, CV37
  Stratford-upon-Avon"
            />
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide"
            style={{ width: "556.333px", marginRight: "30px" }}
          >
            <BeautyComponent
              name="rabicca"
              heading="Beauty"
              description="Nutritional evaluation for full overall"
              portfolio="Portfolio"
              places="4 Places Left"
              nearly="Nearly There"
              discountPrice="40.60"
              price="60.00"
              rating={4}
              address="Salon, CV37
  Stratford-upon-Avon"
            />
          </SwiperSlide>
        </SwiperSlider>
      ),
    },
    {
      name: "Hair",
      key: "hair",
      content: <div>Hair</div>,
    },
    {
      name: "Beauty",
      key: "beauty",
      content: <div>Beauty</div>,
    },
    {
      name: "Asthetics",
      key: "asthetics",
      content: <div>Asthetics</div>,
    },
    {
      name: "Wellness",
      key: "wellness",
      content: <div>Wellness</div>,
    },
    {
      name: "Quick Services",
      key: "quick services",
      content: <div>Quick Services</div>,
    },
  ];

  const onSubmit = () => {
    // console.log(values);
  };

  const content = [
    {
      name: t("text.common.hair"),
      key: "hair",
      content: <Search onSubmit={onSubmit} />,
    },
    {
      name: t("text.common.beauty"),
      key: "beauty",
      content: <Search onSubmit={onSubmit} />,
    },
    {
      name: t("text.common.aesthetics"),
      key: "aesthetics",
      content: <Search onSubmit={onSubmit} />,
    },
    {
      name: t("text.common.wellness"),
      key: "wellness",
      content: <Search onSubmit={onSubmit} />,
    },
  ];

  return (
    <>
      <MetaTags title={t("text.home.title")} />
      <section className="bannerSec position-relative">
        <div id="bannerslider" className="bannerSec_slider">
          <div className="swiper-container">
            <SwiperSlider
              pagination
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide
                style={{
                  backgroundImage: `url(${cssUrls("banner-image.jpg")})`,
                }}
              >
                <p className="text-white mb-0 text-uppercase">
                  Connecting Models to Practicing Professionals
                </p>
                <h1 className="bannerSec_head">Glow. Grow. Perfect.</h1>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundImage: `url(${cssUrls("banner-image.jpg")})`,
                }}
              >
                <p className="text-white mb-0 text-uppercase">
                  Connecting Models to Practicing Professionals
                </p>
                <h2 className="bannerSec_head">Glow. Grow. Perfect.</h2>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundImage: `url(${cssUrls("banner-image.jpg")})`,
                }}
              >
                <p className="text-white mb-0 text-uppercase">
                  Connecting Models to Practicing Professionals
                </p>
                <h2 className="bannerSec_head">Glow. Grow. Perfect.</h2>
              </SwiperSlide>
            </SwiperSlider>
          </div>
          <div className="bannerSec_inner">
            <Tabs
              tabContent={content}
              tabClass="bannerSec_inner"
              navClass="nav nav-pills"
              navVariant="pills"
              navItemClass="nav-item"
              parentContentClass="tab-content bannerSec_inner_body"
            />
          </div>
        </div>
      </section>
      <SectionLayoutComponent extraClassName="aboutus py-70">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xl-7">
            <div className="aboutus_left d-flex justify-content-center">
              <div className="aboutus_left_items">
                <div className="aboutus_left_image position-relative">
                  <ImageElement
                    className="img-fluid curve-left"
                    source="hair.png"
                    alt="women-hair"
                  />
                  <span className="position-absolute">
                    {t("text.common.hair")}
                  </span>
                </div>
              </div>
              <div className="aboutus_left_items">
                <div className="aboutus_left_image position-relative">
                  <ImageElement
                    className="img-fluid"
                    source="beauty.png"
                    alt="women-hair"
                  />
                  <span className="position-absolute">
                    {t("text.common.beauty")}
                  </span>
                </div>
              </div>
              <div className="aboutus_left_items">
                <div className="aboutus_left_image position-relative">
                  <ImageElement
                    className="img-fluid"
                    source="aesthetics.png"
                    alt="women-hair"
                  />
                  <span className="position-absolute">
                    {t("text.common.aesthetics")}
                  </span>
                </div>
              </div>
              <div className="aboutus_left_items">
                <div className="aboutus_left_image position-relative">
                  <ImageElement
                    className="img-fluid curve-right"
                    source="wellness.png"
                    alt="women-hair"
                  />
                  <span className="position-absolute">
                    {t("text.common.wellness")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="aboutus_right">
              <div className="commonhead">
                <ImageElement
                  source="whyweare-logo.png"
                  alt="logo"
                  className="commonhead_img"
                />
                <h2 className="commonhead_title">
                  Why We Are Your <br className="d-none d-lg-block" /> Beauty &
                  Lifestyle BFFs
                </h2>
                <p>
                  GiniPig definition ~ Traditionally called ‘models’, a GiniPig
                  is a fabulous person who enables Providers to perfect their
                  skills, whether they’re new to their Industry or Pro’s. We
                  affectionately call them GiniPigs as they are worthy of their
                  own new title. They can spot a fab opportunity when they see
                  it.
                </p>
                <div className="d-flex commonhead_button flex-wrap">
                  <Link
                    to="#"
                    className="btn btn-primary ripple-effect-dark btn-lg"
                  >
                    {t("text.common.bookAppointment")}
                  </Link>
                  <Link
                    to="#"
                    className="readmore d-flex align-items-center justify-content-center position-relative readmore-left"
                  >
                    <span>{t("text.common.readMore")}</span>
                    <em className="icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayoutComponent>
      <SectionLayoutComponent extraClassName="treatyourself py-70">
        <BeautyTabComponent
          tabContent={tabContent}
          heading="Treat Yourself Today"
          tabClass="beautyCard_tabs"
          navItemClass="nav-item"
          navLinkClass="nav-link text-center position-relative"
        />
      </SectionLayoutComponent>
      <SectionLayoutComponent extraClassName="highlightsSec py-70">
        <div className="commonhead text-center">
          <span className="commonhead_subtitle text-uppercase">
            highlights of GoGiniPig
          </span>
          <h2 className="commonhead_title">Youll Love Us</h2>
        </div>
        <div className="highlightsSec_inner">
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6">
              <div className="text-center highlightsSec_inner_box">
                <ImageElement
                  className="img-fluid svg"
                  source="newbies.svg"
                  alt="newbies"
                />
                <h3 className="font-bd">Newbies to Pros</h3>
                <p className="font-lt mb-0">
                  Connecting you to our <br className="d-none d-lg-block" />
                  Gorgeous Ginipigs
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="highlightsSec_inner_logo text-center">
                <ImageElement
                  className="img-fluid"
                  source="highlights-logo.png"
                  alt="highlights"
                />
              </div>
              <div className="text-center highlightsSec_inner_box">
                <ImageElement
                  className="img-fluid svg"
                  source="fairy.svg"
                  alt="fairy-godmothers"
                />
                <h3 className="font-bd">Your Fairy Godmothers</h3>
                <p className="font-lt mb-0">
                  Lets fill those last minute
                  <br className="d-none d-lg-block" />
                  appointments
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="text-center highlightsSec_inner_box mb-0">
                <ImageElement
                  className="img-fluid svg"
                  source="price.svg"
                  alt="price-tags"
                />
                <h3 className="font-bd">Without The Price Tags</h3>
                <p className="font-lt mb-0">
                  Must haves from only £7.50 & always a{" "}
                  <span className="font-sm">minimum 30% off! </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionLayoutComponent>
      <ProviderSection
        sectionClass="bg-95"
        heading="Partner With Us"
        buttonName={t("text.home.findMeGiniPig")}
        linkName={t("text.home.readMore")}
        source="/providers-img.png"
      >
        <p className="mb-0">
          We’re your people. We know how hard it can be to find{" "}
          <span className="font-sm">reliable</span>models to perfect your
          Treatments or Services on, so we created this
          <span className="font-sm">super-friendly</span> space. By being part
          of our <span className="font-sm">Tribe,</span> you can{" "}
          <span className="font-sm">relax,</span> safe in the knowledge that we
          will do everything possible to pair you with{" "}
          <span className="font-sm">perfect GiniPigs.</span> We also look after
          you if you suffer a lastminute cancellation or a no-show, because
          we&apos;re your
          <span className="font-sm"> Beauty & Lifestyle BFF&apos;s.</span>
        </p>
      </ProviderSection>
      <Manage />
      <SectionLayoutComponent extraClassName="browzingSec py-70">
        <div className="commonhead text-center">
          <span className="commonhead_subtitle text-uppercase">
            brought to you by GoGiniPig
          </span>
          <h2 className="commonhead_title">Browzing With Us</h2>
        </div>
        <div className="text-end mb-3">
          <Link
            to={routesMap.BLOG.path}
            className="readmore position-relative viewall-btn text-end"
          >
            {t("text.common.viewAll")}
          </Link>
        </div>
        <div className="row g-3 justify-content-center">
          {knowMoreContent.map((item, key) => {
            return (
              <BlockComponent
                key={key}
                source={item?.source}
                description={item?.description}
                date={dateFormatter(item?.date)}
                url={`${routesMap.BLOG_DETAILS.path}/${item?.id}`}
                btnText={t("text.common.knowMore")}
              />
            );
          })}
        </div>
      </SectionLayoutComponent>
    </>
  );
}

export default Home;
