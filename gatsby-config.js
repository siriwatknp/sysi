module.exports = {
  siteMetadata: {
    title: `SYSI — เครือข่ายนวัตกรรมคนรุ่นใหม่`,
    description: `สมัครเข้าร่วม "โครงการสนับสนุนคนรุ่นใหม่ที่ต้องการสร้างนวัตกรรมเพื่อแก้ปัญหาสังคม"`,
    author: `@sysithailand`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Kanit`,
            variants: ['400', '700', '900'],
          },
          {
            family: `Sarabun`,
            variants: ['400', '700'],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography`,
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NBKNFQX',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        // includeInDevelopment: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SYSI — เครือข่ายนวัตกรรมคนรุ่นใหม่`,
        short_name: `SYSI`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FF9A3E`,
        display: `minimal-ui`,
        icon: `src/images/sysi_favicon.jpg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
