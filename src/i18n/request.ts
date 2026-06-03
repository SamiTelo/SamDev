import { getRequestConfig } from "next-intl/server";
import { locales, type Locale } from "./routing";

const isLocale = (value: string): value is Locale => {
  return locales.includes(value as Locale);
};

export default getRequestConfig(async ({ locale }) => {
  const currentLocale =
    locale && isLocale(locale)
      ? locale
      : "fr";

  return {
    locale: currentLocale,
    messages: (
      await import(`../../messages/${currentLocale}.json`)
    ).default
  };
});