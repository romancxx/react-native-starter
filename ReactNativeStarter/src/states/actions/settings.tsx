import { LOCALE_CHANGE, THEME_CHANGE } from "@states/reducers/settings";

export function localeChange(locale: string) {
  return { type: LOCALE_CHANGE, payload: locale };
}

export const updateLocale = ({ dispatch }: any) => {
  return (nextLocale: string) => dispatch(localeChange(nextLocale));
};

export function themeChange(theme: any) {
  return { type: THEME_CHANGE, payload: theme };
}

export const updateTheme = ({ dispatch }: any) => {
  return (nextTheme: any) => dispatch(themeChange(nextTheme));
};