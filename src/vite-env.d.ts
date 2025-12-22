/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RD_STATION_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}