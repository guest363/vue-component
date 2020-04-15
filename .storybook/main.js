const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-storysource",
    "@storybook/addon-docs",
    "@storybook/addon-viewport/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-notes/register",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.less$/,
      use: ["vue-style-loader", "css-loader", "less-loader"],
      include: path.resolve(__dirname, "../"),
    });
    config.module.rules.push({
      resourceQuery: /blockType=docs/,
      use: [
        "storybook-readme/vue/docs-loader",
        "html-loader",
        "markdown-loader",
      ],
    });

    // Return the altered config
    return config;
  },
};
