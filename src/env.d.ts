/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  Alpine: import("alpinejs").Alpine;
}

interface ImportMetaEnv {
  readonly GITHUB_TOKEN: string;
}
