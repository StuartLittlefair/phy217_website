const prettify = require('html-prettify');

module.exports = function (eleventyConfig) {

    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addPassthroughCopy('./src/js/');
    eleventyConfig.addPassthroughCopy('./src/resources/');
    eleventyConfig.addPassthroughCopy('./src/**/*.png');
    eleventyConfig.addPassthroughCopy('./src/**/*.gif');
    eleventyConfig.addPassthroughCopy('./src/**/*.jpg');
    eleventyConfig.addPassthroughCopy('./src/**/*.mov');

    var figures = require("./src/_data/figures");
    eleventyConfig.addShortcode("showfigure", function (tag) {
        var figure = figures[tag];
        var str = `<figure id="figure${figure.fignum}"><div class="thumbnail"><img src="${figure.filename}"></div><figcaption><strong>Figure ${figure.fignum}:</strong> ${figure.caption}</figcaption></figure>`
        return prettify(str);
    });

    eleventyConfig.addShortcode("showfigstack", function (tag) {
        var fig = figures[tag];
        var cellsize = Math.floor(12 / fig.filenames.length);

        var str = '<div class="grid-x grid-margin-x align-center">';
        fig.filenames.forEach(function (value) {
            str += `<div class="cell small-12 medium-${cellsize}"><div class="thumbnail"><img src="${value}"></div></div>`
        });
        str += `<div class="cell"><figure id="figure${fig.fignum}">`;

        // captions need to update when images are stacked for mobile
        if (fig.captions.length == 2) {
            var prefixes = [
                "<strong class='show-for-medium'>Left: </strong><strong class='hide-for-medium'>Top: </strong>",
                "<strong class='show-for-medium'> Right: </strong><strong class='hide-for-medium'> Bottom: </strong>",
            ]
        } else {
            var prefixes = [
                "<strong class='show-for-medium'>Left: </strong><strong class='hide-for-medium'>Top: </strong>",
                "<strong> Middle</strong>",
                "<strong class='show-for-medium'> Right: </strong><strong class='hide-for-medium'> Bottom: </strong>",
            ]
        }
        // zip together captions and prefixes and make caption
        var caption = "";
        fig.captions.map(function (subcaption, i) {
            caption += prefixes[i] + subcaption;
        });

        str += `<figcaption><strong>Figure ${fig.fignum}:</strong> ${caption}</figcaption></figure>`;
        str += '</div></div>'
        return prettify(str);
    });

    eleventyConfig.addShortcode("figref", function (tag, capitalise, twocolumn) {
        var figure = figures[tag];
        var title = "figure"
        if (capitalise) { title = "Figure"; }
        if (twocolumn == undefined) {
            return `<a href="#figure${figure.fignum}">${title} ${figure.fignum}</a>`;
        }
        var str = `<a class="show-for-medium" href="#figure${figure.fignum}">${title} ${figure.fignum} (left)</a>` +
            `<a class="hide-for-medium" href="#figure${figure.fignum}">${title} ${figure.fignum} (above)</a>`;
        return prettify(str);
    });

    // Set custom directories for input, output, includes, and data
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "dist"
        }
    };
};