export const assetPath = (relativePath: string): string => {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const trimmedPath = relativePath.replace(/^\/+/, '');

  return `${normalizedBase}${trimmedPath}`;
};
