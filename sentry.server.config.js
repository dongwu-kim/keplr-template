import * as Sentry from '@sentry/nextjs';

import packageInfo from './package.json';

Sentry.init({
  dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DNS,
  environment:
    process.env.SENTRY_ENVIRONMENT ||
    process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
  release: process.env.VERCEL_GIT_COMMIT_SHA ?? packageInfo.version,
  tracesSampleRate: 1.0,
});
