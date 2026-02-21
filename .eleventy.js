const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSass = require("eleventy-sass");
const { DateTime } = require("luxon");
const path = require("path");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSass, {
    sassOptions: {
      loadPaths: [
        path.join(__dirname, "_sass"),
        path.join(__dirname, "node_modules")
      ],
    },
  });

  // Filters
  eleventyConfig.addFilter("date", (dateObj, format) => {
    if (!dateObj) return "";
    const date = typeof dateObj === "string" ? new Date(dateObj) : dateObj;
    
    if (format === "%Y-%m-%dT%H:%M:%S%z") {
      return DateTime.fromJSDate(date).toISO();
    }
    
    // Simple mapping for common Jekyll date formats to Luxon
    // Jekyll: %b %-d, %Y -> Luxon: MMM d, yyyy
    if (format === "%b %-d, %Y") {
      return DateTime.fromJSDate(date).toFormat("MMM d, yyyy");
    }
    if (format === "%Y-%m-%d") {
      return DateTime.fromJSDate(date).toFormat("yyyy-MM-dd");
    }
    
    // Fallback to simple format mapping if it looks like Jekyll format
    // This is very basic, for production we might want a more complete mapping
    const mapping = {
      "%Y": "yyyy",
      "%m": "MM",
      "%d": "dd",
      "%b": "MMM",
      "%B": "MMMM",
      "%H": "HH",
      "%M": "mm",
      "%S": "ss"
    };
    
    let luxonFormat = format;
    if (luxonFormat) {
      for (const [jekyll, luxon] of Object.entries(mapping)) {
        luxonFormat = luxonFormat.replace(new RegExp(jekyll, "g"), luxon);
      }
      return DateTime.fromJSDate(date).toFormat(luxonFormat);
    }
    
    return DateTime.fromJSDate(date).toFormat("MMM d, yyyy");
  });

  eleventyConfig.addFilter("absolute_url", function(url) {
    const isServe = process.argv && (process.argv.includes("--serve") || process.argv.includes("-s"));
    const siteUrl = isServe ? "http://localhost:8080" : "https://elytra.app";
    
    if (!url) return siteUrl;
    if (url.startsWith("http")) return url;
    return siteUrl + (url.startsWith("/") ? "" : "/") + url;
  });

  eleventyConfig.addFilter("relative_url", function(url) {
    const isServe = process.argv && (process.argv.includes("--serve") || process.argv.includes("-s"));
    const baseUrl = ""; 
    if (!url) return baseUrl;
    return baseUrl + (url.startsWith("/") ? "" : "/") + url;
  });

  eleventyConfig.addFilter("xml_escape", (str) => {
    if (!str) return "";
    return str.replace(/[<>&"']/g, (m) => {
      switch (m) {
        case "<": return "&lt;";
        case ">": return "&gt;";
        case "&": return "&amp;";
        case "\"": return "&quot;";
        case "'": return "&apos;";
        default: return m;
      }
    });
  });

  eleventyConfig.addFilter("date_to_rfc822", (dateObj) => {
    const date = typeof dateObj === "string" ? new Date(dateObj) : dateObj;
    return DateTime.fromJSDate(date).toRFC2822();
  });

  eleventyConfig.addFilter("jsonify", (obj) => {
    return JSON.stringify(obj);
  });

  eleventyConfig.addFilter("normalize_whitespace", (str) => {
    if (!str) return "";
    return str.replace(/\s+/g, " ").trim();
  });

  eleventyConfig.addFilter("truncatewords", (str, count) => {
    if (!str) return "";
    const words = str.split(/\s+/);
    if (words.length <= count) return str;
    return words.slice(0, count).join(" ") + "...";
  });

  // Collections
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("_posts/**/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addCollection("categories", (collection) => {
    const categories = {};
    collection.getFilteredByGlob("_posts/**/*.md").forEach((item) => {
      if (!item.data.categories) return;
      item.data.categories.forEach((category) => {
        if (!categories[category]) {
          categories[category] = [];
        }
        categories[category].push(item);
      });
    });
    return categories;
  });

  // Passthrough Copy
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy("assets/icons");
  eleventyConfig.addPassthroughCopy("assets/2018");
  eleventyConfig.addPassthroughCopy("assets/2019");
  eleventyConfig.addPassthroughCopy("assets/2020");
  eleventyConfig.addPassthroughCopy("assets/2021");
  eleventyConfig.addPassthroughCopy("assets/2022");
  eleventyConfig.addPassthroughCopy("assets/2025");
  eleventyConfig.addPassthroughCopy("assets/2026");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html", "liquid", "xml", "json"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
  };
};
