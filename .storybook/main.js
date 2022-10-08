const path = require('path');

module.exports = {
  //stories- 一个表示故事文件的位置，相对于 main.js
  "stories": [
    "../src/**/*.stories.mdx",//**的意思是包含 ./src/ 下的所有目录的所有文件，包含任何目录下面的目录下的文件。
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  //addons- 列表插件您正在使用。
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    '@storybook/addon-storysource',
    // '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    'storybook-mobile',
    'storybook-preset-less',
  ],
  //framework- 框架特定的配置，以帮助加载和构建过程
  "framework": "@storybook/react",
  //配置故事书的内部功能。
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  //您需要进行任何细粒度的更改,返回修改后的配置
  //webpackFinal- 定制网络包配置.
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];
    
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { modules: true, sourceMap: true },
        },{
          loader: 'sass-loader',
          options: { sourceMap: true, },
        },{
          loader: path.resolve('./.storybook/loaders/loader.js'),
          options: {},
        },
      ],
    });

    return config;
  },
}