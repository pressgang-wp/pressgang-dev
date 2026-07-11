export function versionedAsset(path) {
  const version = process.env.ASSET_VERSION;
  return version ? `${path}?v=${encodeURIComponent(version)}` : path;
}
