export const assetVersion = "20260711-2";

export function versionedAsset(path) {
  return `${path}?v=${assetVersion}`;
}
