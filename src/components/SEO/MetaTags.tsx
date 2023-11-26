import React, { useEffect, useState } from "react";

type Props = {
  tags?: string;
  desc?: string;
  locale?: string;
  title?: string;
  currentPageUrl?: string;
};

const MetaTags: React.FC<Props> = ({
  tags,
  desc,
  locale,
  title,
  currentPageUrl,
}) => {
  const [pageUrl, setPageUrl] = useState(currentPageUrl || "");

  useEffect(() => {
    if (!pageUrl) {
      setPageUrl(window.location.href);
    }
  }, []);

  return (
    <>
      <meta name="robots" content="follow, index" />
      {tags && <meta name="keywords" content={tags} />}
      <meta name="description" content={desc} />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      {pageUrl && <meta property="og:url" content={pageUrl} />}
      <meta property="og:type" content="article" />
      {/* <meta property="og:type" content={meta.type} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:title" content={title} />
      {/* false === "article" && (
					<>
						<meta
							property="article:published_time"
							content={data.createdDate || data.createdTime}
						/>
						<meta property="article:author" content={blogConfig.author} />
					</>
				)*/}
    </>
  );
};

export default MetaTags;
