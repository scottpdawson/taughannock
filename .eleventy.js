const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-es");
const htmlmin = require("html-minifier");
const slugify = require("slugify");
const moment = require("moment");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter("removeNonAlpha", (text) => {
    return text.replace(/[ñ]/g, "n").replace(/[^- 0-9a-z]/gi, "");
  });

  eleventyConfig.addFilter("galleryImage", (img) => {
    return img + "?nf_resize=smartcrop&w=213&h=213";
  });

  eleventyConfig.addFilter("heroImage", (img) => {
    return img + "?nf_resize=smartcrop&w=723&h=560";
  });

  eleventyConfig.addFilter("contentImage", (img) => {
    return img + "?nf_resize=fit&w=550";
  });

  eleventyConfig.addFilter("squash", require("./filters/squash.js"));

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("momentDate", (dateObj) => {
    return moment.utc(dateObj).format("MMMM D, YYYY");
  });

  eleventyConfig.addFilter("momentSeason", (dateObj) => {
    let month = moment.utc(dateObj).month();
    if ([11, 0, 1].includes(month)) {
      return "winter";
    }
    if ([2, 3, 4].includes(month)) {
      return "spring";
    }
    if ([5, 6, 7].includes(month)) {
      return "summer";
    }
    if ([8, 9, 10].includes(month)) {
      return "autumn";
    }
  });

  eleventyConfig.addFilter("seasonIcon", (season) => {
    switch (season) {
      case "spring":
        return "fas fa-seedling";
        break;
      case "summer":
        return "fas fa-sun";
        break;
      case "autumn":
        return "fab fa-pagelines";
        break;
      case "winter":
        return "far fa-snowflake";
        break;
      default:
        return "";
    }
  });

  eleventyConfig.addFilter("seasonColor", (season) => {
    switch (season) {
      case "spring":
        return "#50ce50";
        break;
      case "summer":
        return "#ffb200";
        break;
      case "autumn":
        return "#ff6b00";
        break;
      case "winter":
        return "#62bfff";
        break;
      default:
        return "";
    }
  });

  eleventyConfig.addFilter("momentYear", (dateObj) => {
    return moment.utc(dateObj).format("YYYY");
  });

  eleventyConfig.addFilter("momentMonthYear", (dateObj) => {
    return moment.utc(dateObj).format("MMM D, YYYY");
  });

  eleventyConfig.addFilter("momentMonthDay", (dateObj) => {
    return moment.utc(dateObj).format("MMMM D");
  });

  eleventyConfig.addFilter("getYearArray", (collection) => {
    let yearArray = [];
    collection.forEach((item) => {
      yearArray.push(moment.utc(item.date).format("YYYY"));
    });
    return [...new Set(yearArray)];
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function (code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  eleventyConfig.addCollection("allPosts", (collection) =>
    collection.getFilteredByGlob("posts/*.md")
  );

  eleventyConfig.addCollection("seasons", (collection) => {
    return collection.getFilteredByGlob("pages/*.md").filter((item) => {
      const includeInSeasonMenu = item.data.includeInSeasonMenu;
      return includeInSeasonMenu ? item : false;
    });
  });

  eleventyConfig.addCollection("activities", (collection) => {
    return collection.getFilteredByGlob("pages/*.md").filter((item) => {
      const includeInActivityMenu = item.data.includeInActivityMenu;
      return includeInActivityMenu ? item : false;
    });
  });

  eleventyConfig.addCollection("spring", (collection) => {
    return collection.getFilteredByGlob("posts/*.md").filter((item) => {
      const season = item.data.season;
      return season && season.toLowerCase() === "spring" ? item : false;
    });
  });

  eleventyConfig.addCollection("summer", (collection) => {
    return collection.getFilteredByGlob("posts/*.md").filter((item) => {
      const season = item.data.season;
      return season && season.toLowerCase() === "summer" ? item : false;
    });
  });

  eleventyConfig.addCollection("autumn", (collection) => {
    return collection.getFilteredByGlob("posts/*.md").filter((item) => {
      const season = item.data.season;
      return season && season.toLowerCase() === "autumn" ? item : false;
    });
  });

  eleventyConfig.addCollection("winter", (collection) => {
    return collection.getFilteredByGlob("posts/*.md").filter((item) => {
      const season = item.data.season;
      return season && season.toLowerCase() === "winter" ? item : false;
    });
  });

  eleventyConfig.addCollection("tagList", require("./utils/getTagList.js"));

  eleventyConfig.addNunjucksShortcode("lightbox", function (arr) {
    let imageString = "";
    for (i = 0; i < arr.length; i++) {
      imageString =
        imageString +
        `<div class="carousel-cell">
        <img 
          src="${arr[i].image}?nf_resize=fit&h=800" 
          title="${arr[i].caption}" 
          title="${arr[i].caption}" />
      </div>`;
    }
    return `<div class="main-carousel" data-flickity='{ "fullscreen": true, "wrapAround": "true", "autoPlay": "3000", "pauseAutoPlayOnHover": true }'>${imageString}</div>`;
  });

  const embedVimeo = require("eleventy-plugin-vimeo-embed");
  eleventyConfig.addPlugin(embedVimeo);

  const embedInstagram = require("eleventy-plugin-embed-instagram");
  eleventyConfig.addPlugin(embedInstagram);

  const pluginRss = require("@11ty/eleventy-plugin-rss");
  eleventyConfig.addPlugin(pluginRss);

  const readingTime = require("eleventy-plugin-reading-time");
  eleventyConfig.addPlugin(readingTime);

  eleventyConfig.addShortcode("picture", require("./utils/picture.js"));
  eleventyConfig.addShortcode("pictureRt", require("./utils/pictureRt.js"));
  eleventyConfig.addShortcode("pictureRtSm", require("./utils/pictureRtSm.js"));
  eleventyConfig.addShortcode("githubGist", require("./utils/githubGist.js"));
  eleventyConfig.addShortcode("currentYear", function () {
    const year = new Date().getFullYear();
    return `${year}`;
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Universal slug filter strips unsafe chars from URLs
  eleventyConfig.addFilter("slugify", function (str) {
    return slugify(str, {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@]/g,
    });
  });

  eleventyConfig.addFilter("has_tag", function (arr, key, value) {
    return arr.filter((item) => {
      const keys = key.split(".");
      const reduce = keys.reduce((object, key) => {
        return object[key];
      }, item);
      const str = String(reduce);

      return str.includes(value) ? item : false;
    });
  });

  eleventyConfig.addFilter("lacks_tag", function (arr, key, value) {
    return arr.filter((item) => {
      const keys = key.split(".");
      const reduce = keys.reduce((object, key) => {
        return object[key];
      }, item);
      const str = String(reduce);

      return str.includes(value) ? false : item;
    });
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("static/");
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_includes/assets/");

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  var markdownItAttrs = require("markdown-it-attrs");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let opts = {
    permalink: false,
  };

  eleventyConfig.setLibrary(
    "md",
    markdownIt(options).use(markdownItAnchor, opts).use(markdownItAttrs, {
      leftDelimiter: "{",
      rightDelimiter: "}",
      allowedAttributes: [], // empty array = all attributes are allowed
    })
  );

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
