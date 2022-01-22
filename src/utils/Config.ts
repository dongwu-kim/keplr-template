import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const Config = publicRuntimeConfig as {
  ENVIRONMENT: 'prodiction' | 'development';

  SENTRY_DSN: string;
  SENTRY_ENVIRONMENT: string;
  SENTRY_TOKEN: string;

  VERCEL_GIT_COMMIT_SHA: string;

  BASE_URL: string;
};
