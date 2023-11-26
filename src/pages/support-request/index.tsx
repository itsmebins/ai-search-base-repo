import React from "react";
import Head from "next/head";
import ServiceRequest from "src/routes/Support";
import HomeLayout from "layouts/HomeLayout";
import { contextTypes } from "utils/appData";

const Support = () => {
  return (
    <React.Fragment>
      <Head>
        <title>
          {`Contact ${
            process.env.REACT_APP_DOMAIN || "DomainDeco"
          } | Request More Information`}{" "}
        </title>
      </Head>
      <HomeLayout>
        <ServiceRequest context={contextTypes.CONTEXT_SERVICE_REQUEST_PAGE} />
      </HomeLayout>
    </React.Fragment>
  );
};

export default Support;
