/** Shared by connection settings and reporting before the full API module can load. */
export const API_BASE_STORAGE_KEY = "rakazo.api_base";
export const LOCAL_API = "http://127.0.0.1:3100";
// Self-hosted build: point new installs at this deployment by default, so the app is
// usable right after install without opening the custom-server screen.
export const SELF_HOSTED_API = "https://rakazo.1589582.xyz:16166";
export const DEFAULT_API = process.env.EXPO_PUBLIC_API_URL ?? SELF_HOSTED_API;
