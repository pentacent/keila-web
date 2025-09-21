/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  Alpine: import("alpinejs").Alpine;
  couponCode?: string;
  couponAmount?: string;
}

interface ImportMetaEnv {
  readonly GITHUB_TOKEN: string;
}
