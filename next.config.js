const { withSentryConfig } = require('@sentry/nextjs');

const pick = (obj, keys) =>
  keys.reduce(
    (result, key) => ({
      ...result,
      [key]: obj[key],
    }),
    {},
  );

const ExportedNextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: pick(process.env, [
    'ENVIRONMENT',
    'SENTRY_DSN',
    'SENTRY_ENVIRONMENT',
    'SENTRY_TOKEN',
    'VERCEL_GIT_COMMIT_SHA',
  ]),
  images: {
    deviceSizes: [375, 720, 1080, 1280, 1920, 2048, 3840],
    // domains: ["soul-fiction.ninja"],
  },
};

const SentryWebpackPluginOptions = {
  silent: true,
  authToken: process.env.SENTRY_TOKEN,
};

module.exports = withSentryConfig(
  ExportedNextConfig,
  SentryWebpackPluginOptions,
);
