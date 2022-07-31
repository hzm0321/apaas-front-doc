// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '汉得中台 aPaaS 前端团队',
  tagline: 'Dinosaurs are cool',
  url: 'https://hzm0321.github.io',
  baseUrl: '/apaas-front-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hzm0321', // Usually your GitHub org/user name.
  projectName: 'apaas-front-doc', // Usually your repo name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hzm0321/apaas-front-doc/blob/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '汉得中台 aPaaS 前端团队',
        logo: {
          alt: '汉得中台 aPaaS 前端团队',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'developStyle',
            position: 'left',
            label: '项目开发规范',
          },
          {to: '/empty', label: 'react-vision', position: 'left'},
          {
            href: 'https://github.com/hzm0321/apaas-front-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档资源',
            items: [
              {
                label: '项目开发规范',
                to: '/docs/developStyle',
              },
            ],
          },
          {
            title: '了解汉得',
            items: [
              {
                label: '汉得官网',
                href: 'https://www.hand-china.com/',
              },
              {
                label: '招聘官网',
                href: 'http://career.hand-china.com/',
              },
              {
                label: '汉得门户',
                href: 'http://eip.hand-china.com/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hzm0321/apaas-front-doc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hand aPaaS Team, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  // webpack: {
  //   jsLoader: ()=> ({
  //     rules: [
  //       {
  //         test: /\.(eot)$/,//fonts目录下四个文件后缀名
  //         use: ["url-loader"],
  //       },
  //     ],
  //   })
  // }
};

module.exports = config;
