import dayjs from "dayjs";
import {Platform} from "~/types";
import parseTwitter from "~/utils/parse/twitter";
import parseInstagram from "~/utils/parse/instagram";
import parseFacebook from "~/utils/parse/facebook";

export * from './api'
export * from './sort'

export const time = {
  pretty: (date: string) => {
    return dayjs(date).format("DD/MM/YYYY");
  }
}

export function setTheme(isDark: boolean) {
  document.documentElement.classList.toggle('dark', isDark)
}

export function parse(platform: Platform, data: any) {
  switch (platform) {
    case Platform.TWITTER:
      return parseTwitter(data)
    case Platform.INSTAGRAM:
      return parseInstagram(data)
    case Platform.FACEBOOK:
      return parseFacebook(data)
    default:
      return null
  }
}
