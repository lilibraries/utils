const path = require("path");

module.exports = {
  title: "Utils",
  url: "https://lilibraries.github.io/",
  baseUrl: "/utils/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
  organizationName: "lilibraries",
  projectName: "utils",
  themeConfig: {
    navbar: {
      title: "Utils",
      items: [
        {
          href: "https://github.com/lilibraries/utils",
          label: "Github",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright © 李蔚生. Code licensed MIT, docs CC BY 4.0.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./docs/sidebars.js"),
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          "@lilib/utils": path.resolve(__dirname, "./src"),
        },
      },
    ],
  ],
};
