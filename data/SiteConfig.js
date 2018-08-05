module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
  siteTitle: "Quix", // Site title.
  siteTitleAlt: "Quix for interactive multi-source data analytics.", // Alternative site title for SEO.
  siteLogo: "/logos/wix_logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://quix.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Design and embed interactive multi-source data analytics.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-82450300-1 ", // GA tracking ID.
  disqusShortname: "https-wix-incubator-github-io-oss-gatsby-doc-template", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "User", // Username to display in the author segment.
  userTwitter: "wix", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Israel, TV", // User location to display in the author segment.
  userAvatar: "/logos/wix.png", // User avatar to display in the author segment.
  userDescription: "Wix Ltd.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/wix-incubator/oss-gatsby-doc-template",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/wix",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Messenger",
      url: "https://www.messenger.com/t/wix",
      iconClassName: "fa fa-message"
    },
    {
      label: "Email",
      url: "mailto:wix@wix.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Instagram",
      url: "https://instagram.com/wix",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Wix Ltd.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#000000", // Used for setting manifest and progress theme colors.
  backgroundColor: "#EB5E51", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ["", "Chapter 1", "Chapter 2"] // Used to generate the Table Of Contents. Index 0 should be blank.
};
