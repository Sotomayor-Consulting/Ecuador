import config from "./config.json";
import menuData from "./menu.json";
import type { Menu, NavLink } from "../types";

const normalizeBaseUrl = (value: string) => {
  if (!value || value === "/") return "";
  return `/${value.replace(/^\/+|\/+$/g, "")}`;
};

const withBaseUrl = (url: string) => {
  if (!url || url === "/") return `${base_url || "/"}`;
  if (/^(https?:|mailto:|tel:|#)/.test(url)) return url;

  const normalizedUrl = url.startsWith("/") ? url : `/${url}`;
  return `${base_url}${normalizedUrl}` || normalizedUrl;
};

const createLink = ({ name, url }: NavLink): NavLink => ({
  name,
  url: withBaseUrl(url),
});

export const base_url = normalizeBaseUrl(config.site.base_path || "/");

const menu: Menu = {
  base_url,
  main: menuData.main.map(createLink),
  footer_col_1_title: menuData.footer_col_1_title,
  footer_col_2_title: menuData.footer_col_2_title,
  footer_col_3_title: menuData.footer_col_3_title,
  footer_primary: menuData.footer_primary.map(createLink),
  footer_resource: menuData.footer_resource.map(createLink),
  footer_legal: menuData.footer_legal.map(createLink),
};

export default menu;
