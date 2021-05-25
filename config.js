const config = {
  gatsby: {
    pathPrefix: '/shiren-2',
    siteUrl: 'https://sharksnack.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title: 'Shiren 2 Wiki',
    githubUrl: 'https://github.com/SharkSnack/shiren-2',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/shark_snack" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/5y7UDFc" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/index',
      '/price-chart',
      '/items',
      '/system',
      '/dungeons',
    ],
    collapsedNav: [],
    links: [
      { text: 'Project Thread', link: 'https://krikzz.com/forum/index.php?topic=8495' },
      { text: 'Project64', link: 'https://www.pj64-emu.com/windows-downloads' },
      { text: 'RetroArch', link: 'https://retroarch.com/index.php?page=platforms' },
    ],
    frontline: false,
    ignoreIndex: false
  },
  siteMetadata: {
    title: 'Shiren 2: Oni Invasion! Wiki | SharkSnack',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: 'https://github.com/sharksnack/shiren-2/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
