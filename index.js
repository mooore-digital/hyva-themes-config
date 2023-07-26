const cssprops = require("@fylgja/tailwindcss-plugin-cssprops");
const { createTailwindTokens } = require("./src/twTokens.cjs");
const { rootPath, breakpoints } = require("./src/common.cjs");
const {
    proseCleanup,
    twTypoMargin,
    proseDefaults,
} = require("./src/typography.cjs");

module.exports = {
    breakpoints,
    createTailwindTokens,
    cssprops,
    rootPath,
    proseCleanup,
    proseDefaults,
    twTypoMargin,
};
