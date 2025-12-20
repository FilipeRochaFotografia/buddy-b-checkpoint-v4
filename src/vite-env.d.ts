/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RD_STATION_TOKEN: string;
  // adicione outras variáveis de ambiente aqui se precisar
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}