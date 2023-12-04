interface ImportMetaEnv {
  readonly VITE_PUBLIC_RESOURCE: string;
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
