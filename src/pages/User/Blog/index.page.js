import { t } from "i18next";
import React from "react";
import Row from "react-bootstrap/Row";
import { blogData } from "./blogData";

import {
  Breadcrumb,
  MainBanner,
  SectionLayoutComponent,
  BlockComponent,
  CommonButton,
  MetaTags,
} from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";
import { dateFormatter } from "../../../utils";

function Blog() {
  const breadcrumb = [
    {
      path: routesMap.HOME.path,
      name: t("text.home.title"),
    },
    {
      path: "#",
      name: t("text.blog.title"),
    },
  ];
  return (
    <>
      <MetaTags title={t("text.blog.title")} />
      <MainBanner
        extraClassName="commonhead commonhead-small"
        breadcrumb={<Breadcrumb breadcrumb={breadcrumb} />}
        heading="Browzing With Us"
      />
      <SectionLayoutComponent extraClassName="browzingSec_inner py-70">
        <Row className="g-3 justify-content-center">
          {blogData
            ? blogData.map((item, key) => {
                return (
                  <BlockComponent
                    key={key}
                    source={item?.imagePath}
                    description={item?.description}
                    date={dateFormatter(item?.date)}
                    url={`${routesMap.BLOG_DETAILS.path}/${item?.id}`}
                    btnText={t("text.common.knowMore")}
                  />
                );
              })
            : null}
        </Row>
        <div className="text-center">
          <CommonButton
            variant="secondary"
            extraClassName="ripple-effect browzingSec_more"
          >
            {t("text.common.loadMore")}...
          </CommonButton>
        </div>
      </SectionLayoutComponent>
    </>
  );
}

export default Blog;
