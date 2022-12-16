// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const CracoAlias = require("craco-alias");
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.path.json",
      },
    },
    {
      mode: "production",
      plugin: SentryWebpackPlugin,
      options: {
        authToken: "5012db8255c64eacb2324d46057a4bb61675e5c1c9804a3c9db943398c2909c3",
        org: "keyme",
        project: "keyme",
        release: "0.1.0",

        // webpack specific configuration
        include: ".",
        ignore: ["node_modules", "webpack.config.js"],
      },
    },
  ],
};
