import { t } from "i18next";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  SectionLayoutComponent,
  BackButton,
  MetaTags,
  ImageElement,
} from "../../../components";
import { dateFormatter } from "../../../utils";
import { blogDetailsData } from "./blogDetailsData";

function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <MetaTags title={t("text.blogDetails.title")} />
      <main className="main-content blogDetail">
        {/* Banner Start */}
        <SectionLayoutComponent extraClassName="pageBanner position-relative">
          <div className="commonhead commonhead-small d-flex align-items-baseline justify-content-between">
            <div>
              <h1 className="commonhead_title mb-0 font-sm">
                {blogDetailsData?.title}
              </h1>
              <p>
                <span className="blogDetail_head font-md">
                  {blogDetailsData?.publish}{" "}
                </span>{" "}
                <span className="blogDetail_divider"> |</span>
                {dateFormatter(blogDetailsData?.publish_date)}
              </p>
            </div>
            <div className="d-flex">
              <BackButton path="" linkAction={() => navigate(-1)}>
                <em className="icon-arrow-back" /> {t("text.common.back")}
              </BackButton>
            </div>
          </div>
        </SectionLayoutComponent>
        {/* Banner End */}
        {/* Banner Image Start */}
        <div className="text-center">
          <div className="container">
            <div className="blogDetail_img">
              <ImageElement
                source={blogDetailsData?.banner_image}
                className="img-fluid w-100"
                alt="blog-detail"
              />
            </div>
          </div>
        </div>
        {/* Banner Image End */}
        {/* Banner Start */}
        <SectionLayoutComponent extraClassName="py-70 pt-0">
          <div className="commonhead">
            <div
              dangerouslySetInnerHTML={{ __html: blogDetailsData?.description }}
            />
          </div>
        </SectionLayoutComponent>
      </main>
    </>
  );
}

export default BlogDetails;
