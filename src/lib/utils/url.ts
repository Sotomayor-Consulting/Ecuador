const EXTERNAL_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;
const SPECIAL_PATH_PATTERN = /^(?:mailto:|tel:|#|data:)/i;

const normalizeBasePath = (basePath: string) => {
  if (!basePath || basePath === "/") return "";
  return `/${basePath.replace(/^\/+|\/+$/g, "")}`;
};

export const withBasePath = (
  value: string,
  basePath = import.meta.env.BASE_URL,
) => {
  if (!value) return value;
  if (EXTERNAL_URL_PATTERN.test(value) || SPECIAL_PATH_PATTERN.test(value)) {
    return value;
  }

  const normalizedBasePath = normalizeBasePath(basePath);
  const normalizedValue = value.startsWith("/") ? value : `/${value}`;

  return normalizedBasePath ? `${normalizedBasePath}${normalizedValue}` : normalizedValue;
};

export const withSiteUrl = (
  value: string,
  siteUrl: string,
  basePath = import.meta.env.BASE_URL,
) => new URL(withBasePath(value, basePath), siteUrl).toString();
