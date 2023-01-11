const { rootPath, breakpoints } = require("./src/common.cjs");
const {
    proseCleanup,
    twTypoMargin,
    proseDefaults,
} = require("./src/typography.cjs");
const { createTailwindTokens } = require("./src/twTokens.cjs");

module.exports = {
    rootPath,
    breakpoints,
    proseCleanup,
    twTypoMargin,
    proseDefaults,
    createTailwindTokens,
};
