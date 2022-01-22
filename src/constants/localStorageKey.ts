const LOCAL_STORAGE_KEY = {
  example: 'example',
} as const;

export type LocalStorageKey =
  typeof LOCAL_STORAGE_KEY[keyof typeof LOCAL_STORAGE_KEY];
