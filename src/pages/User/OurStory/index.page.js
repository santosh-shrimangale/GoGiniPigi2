import { t } from "i18next";
import React from "react";
import {
  ProviderSection,
  Breadcrumb,
  ImageElement,
  MainBanner,
  SectionLayoutComponent,
  TeamProfileCard,
  Manage,
  DefinationComponent,
  MetaTags,
} from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";

function OurStory() {
  const profileCard = [
    {
      imagePath: "team/team-img-1.png",
      name: "John Doe",
      position: "Chief Executive officer",
    },
    {
      imagePath: "team/team-img-1.png",
      name: "John Doe",
      position: "Chief Executive officer",
    },
    {
      imagePath: "team/team-img-1.png",
      name: "John Doe",
      position: "Chief Executive officer",
    },
    {
      imagePath: "team/team-img-1.png",
      name: "John Doe",
      position: "Chief Executive officer",
    },
    {
      imagePath: "team/team-img-1.png",
      name: "John Doe",
      position: "Chief Executive officer",
    },
  ];

  const breadcrumb = [
    {
      path: routesMap.HOME.path,
      name: t("text.home.title"),
    },
    {
      path: "#",
      name: t("text.ourStory.title"),
    },
  ];

  return (
    <>
      <MetaTags title={t("text.ourStory.title")} />
      <MainBanner
        extraClassName="commonhead-small"
        breadcrumb={<Breadcrumb breadcrumb={breadcrumb} />}
        heading="GoGiniPig Story"
        description="A little insight into how it all began....."
      >
        <ImageElement source="/our-story-banner.png" className="img-fluid"/>
      </MainBanner>
      <SectionLayoutComponent extraClassName="position-relative py-70">
        <div className="commonhead text-center">
          <h2 className="commonhead_title">
            Why We Are
            <br className="d-none d-lg-block" />
            Your Beauty & Lifestyle BFF&apos;s.
          </h2>
          <p>
            GiniPig definition ~ Traditionally called ‘models’, a GiniPig is a
            fabulous person who enables Providers to perfect their skills,
            whether they&apos;re new to their Industry or Pro&apos;s. We
            affectionately call them GiniPigs as they are worthy of their own
            new title. They can spot a fab opportunity when they see it.
          </p>
          <p className="mb-0">
            Registering as one of our fabulous GiniPigs is so easy. By signing
            up you can search amazing treats and new to market treatments,
            copying your fave Celebrity looks; luscious lips, volume lashes, or
            take a break from it all with some Mindfulness, Yoga or perhaps some
            Personal Training. From Traineesr Newbies adding new skills to their
            menu, to Pro&apos;s and Start that need WOW Insta images, new
            creative looks or filling last minute appointments in their diary.
            We&apos;ve thought of it all; we are your BFF&apos;s for a reason.
          </p>
        </div>
      </SectionLayoutComponent>
      <DefinationComponent />
      <ProviderSection
        linkName={t("text.ourStory.readMoreProvider")}
        buttonName={t("text.ourStory.registerAsProvider")}
        heading="You’re Going To Love Us!"
        source="/providers-img.png"
      >
        <p>
          Registering as one of our amazing Treatment or Service Providers
          couldn&apos;t be easier. From listing your initial appointments, to
          first bookings and collecting amazing reviews in the blink of an eye
          (framed by perfect lashes of course)! You are your own best canvas, so
          register with a gorgeous picture of yourself before listing your
          Treatments or Services and entice your GiniPigs.
        </p>
        <p>
          Whether you need GiniPigs for Portfolios, Case Studies, a Training
          Course or those Insta Pictures we will connect you. We aren’t just for
          Newbies to the industry, we are for Pros and Stars too, we will
          connect GiniPigs to everyone from - Academies, Salons, Mobile,
          Freelance, Home or Online, we have thought of you all.
        </p>
      </ProviderSection>
      <Manage extraClassName="perfectComboSec py-70" />
      <SectionLayoutComponent extraClassName="ourTeamSec py-70">
        <div className="commonhead text-center">
          <h2 className="commonhead_title">{t("text.ourStory.title")}</h2>
          <p className="mb-0">
            GiniPig definition ~ Traditionally called ‘models’, a GiniPig is a
            fabulous person
            <br className="d-none d-lg-block" />
            who enables Providers to perfect their skills,
          </p>
        </div>
        <div className="ourTeamSec_inner">
          <div className="row justify-content-center">
            {profileCard.map((profile) => {
              return (
                <TeamProfileCard
                  imagePath={profile.imagePath}
                  name={profile.name}
                  position={profile.position}
                />
              );
            })}
          </div>
        </div>
      </SectionLayoutComponent>
    </>
  );
}

export default OurStory;
