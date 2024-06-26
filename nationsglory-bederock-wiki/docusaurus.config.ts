import { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import sidebars from './sidebars'; // Assurez-vous que ce chemin est correct

const config: Config = {
  title: 'Nationsglory Bedrock Wiki+',
  tagline: 'Un wiki plus avancé pour Nationsglory Bedrock',
  favicon: 'img/ng.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'Dadadou972',
  projectName: 'wiki-ngbe',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars'),
          editUrl: 'https://github.com/Dadadou972/wiki-ngbe/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: "prerelease",
      content: 'Bienevnue! Ce wiki est actuellement en développement, de nombreuses choses sont en devéloppement. Envie de nous aider? Contartez nous en mp Theking97 sur',
      backgroundColor: "#df4b30",
      textColor: "#ffffff",
      isCloseable: true,
    },
    navbar: {
      title: 'Nations glory bedrock wiki+',
      logo: {
        alt: 'Un wiki plus avancé pour nationsglory bedrock',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {
          href: 'https://discord.gg/aFB3QW3Hfx',
          label: 'discord ngbe creator',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // Insérez vos liens de footer ici
      ],
      // Insérez votre notice de droit d'auteur ici
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
