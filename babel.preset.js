module.exports = function (api, options = {}) {
  const isTest = api.env("test");

  const { module } = options;
  const isCJS = module === "cjs";
  const isESM = module === "esm";

  return {
    presets: [
      [
        "@babel/preset-env",
        isTest
          ? {
              bugfixes: true,
              targets: { node: "current" },
            }
          : {
              bugfixes: true,
              modules: isCJS ? "cjs" : isESM ? false : "auto",
              forceAllTransforms: true,
              ignoreBrowserslistConfig: true,
            },
      ],
      ["@babel/preset-typescript"],
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: 3,
          version: "7.18.3",
        },
      ],
    ],
  };
};
