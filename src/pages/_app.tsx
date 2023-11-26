// src/pages/_app.tsx

import { type AppType } from "next/app";
import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import { ToastContextProvider } from "src/contexts/ToastContext";
import localeEnglishkeys from "localization/translations/en.json";
import "../styles/globals.css";

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();
const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  const language = "en";
  const intl = createIntl(
    {
      locale: language,
      messages: localeEnglishkeys,
    },
    cache,
  );
  return (
    <RawIntlProvider value={intl}>
      <ToastContextProvider>
        <Component {...pageProps} />
      </ToastContextProvider>
    </RawIntlProvider>
  );
};

export default MyApp;
