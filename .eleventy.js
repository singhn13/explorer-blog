
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("*.png");

  eleventyConfig.addShortcode("shipStatus", function(status) {
    return `<div class="ship-status">Ship Status: ${status}</div>`;
  });
};