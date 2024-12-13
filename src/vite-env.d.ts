/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BOOKS_API_SERVER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
