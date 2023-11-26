import React from "react";
import Head from "next/head";
import MetaTags from "components/SEO/MetaTags";

const seoTags = {
  desc: "Desc",
  pageTitle: "pageTitle",
  title:
    "title " +
    new Date().getFullYear(),
  locale: "en",
  tags: "tags",
  currentPageUrl: "",
};
const Index = () => {
  return (
    <>
      <Head>
        <title>{seoTags.pageTitle}</title>
        <MetaTags {...seoTags} />
      </Head>

      <div>Coming Soon</div>
    </>
  );
};

export default Index;
