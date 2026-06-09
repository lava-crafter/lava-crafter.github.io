const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lava Crafter Docs',
  tagline: 'Technical docs for Lava Note and Map Timeline Tool',
  favicon: 'img/favicon.svg',

  url: 'https://lava-crafter.github.io',
  baseUrl: '/',
  organizationName: 'lava-crafter',
  projectName: 'lava-crafter.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Lava Crafter Docs',
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/docs/lava-note/technical/overview', label: 'lava_note', position: 'left'},
        {to: '/docs/map-timeline-tool/overview', label: 'map_timeline_tool', position: 'left'},
        {href: 'https://lava-crafter.github.io/map_timeline_tool/', label: 'Map Timeline Tool Site', position: 'right'},
        {href: 'https://github.com/lava-crafter/lava_note', label: 'lava_note repo', position: 'right'},
        {href: 'https://github.com/lava-crafter/map_timeline_tool', label: 'map_timeline_tool repo', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {label: 'lava_note technical docs', to: '/docs/lava-note/technical/overview'},
            {label: 'map_timeline_tool technical docs', to: '/docs/map-timeline-tool/overview'},
            {label: 'Map Timeline Tool site', href: 'https://lava-crafter.github.io/map_timeline_tool/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} lava-crafter`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
