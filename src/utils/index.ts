export const getUrl = (path: string, metaUrl: string): string => {
  return new URL(path, metaUrl).href;
};
