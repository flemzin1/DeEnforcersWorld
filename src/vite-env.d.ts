/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OFFERING_NAME: string;
  readonly VITE_OFFERING_NUMBER: string;
  readonly VITE_OFFERING_BANK: string;

  readonly VITE_DONATION_NAME: string;
  readonly VITE_DONATION_NUMBER: string;
  readonly VITE_DONATION_BANK: string;

  readonly VITE_TITHES_NAME: string;
  readonly VITE_TITHES_NUMBER: string;
  readonly VITE_TITHES_BANK: string;

  readonly VITE_SEED_NAME: string;
  readonly VITE_SEED_NUMBER: string;
  readonly VITE_SEED_BANK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
