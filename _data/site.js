module.exports = function() {
  console.log("ELEVENTY_RUN_MODE:", process.env.ELEVENTY_RUN_MODE);
  console.log("NODE_ENV:", process.env.NODE_ENV);
  
  const isServe = process.env.ELEVENTY_RUN_MODE === "serve" || process.argv.includes("--serve");
  const url = isServe
    ? "http://localhost:8080" 
    : "https://elytra.app";

  console.log("Using URL:", url);

  return {
    url,
    title: "Elytra",
    email: "support@elytra.app",
    description: "Simple, private, and feature rich RSS feed reader for iOS, iPadOS, and macOS",
    baseurl: "",
    twitter_username: "elytra",
    github_username: "elytra",
    keywords: "elytra,feeds,folders,smart,rss,json,xml,opml,appstore,iOS,iPadOS,Apple,iPhone,iPad",
    caption: "Simple, private, and feature rich RSS feed reader for iOS, iPadOS, and macOS",
    time: new Date()
  };
};
