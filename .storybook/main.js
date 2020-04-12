module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-storysource",
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register'
  ]
};
