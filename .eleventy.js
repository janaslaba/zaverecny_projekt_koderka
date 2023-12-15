const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("IMAGES");

	// Zkopírovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("CSS");

  eleventyConfig.addPassthroughCopy({ "Favicons": "/" });
  
  // Plug-in Navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin); 



  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
 

};
