import React from "react";
import HomeLayout from "layouts/HomeLayout";
import Head from "next/head";
import MetaTags from "components/SEO/MetaTags";
import AISearch from "src/routes/AISearch";

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
      <HomeLayout>
        <div>
          <AISearch />
        </div>
      </HomeLayout>
    </>
  );
};

export default Index;
