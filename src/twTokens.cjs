const {
    flattenObj,
    removeAllExceptValue,
    createObject,
} = require("./objHelper.cjs");

/**
 * Converts an Object of design tokens to a Tailwind compatible tokens.
 *
 * This support the syntax used by figma and sketch,
 * not the W3C Community syntax (https://design-tokens.github.io/community-group/format/)
 *
 * @requires flattenObj
 * @requires removeAllExceptValue
 * @requires createObject
 *
 * @param {Object} tokens - Object of design tokens
 * @returns Object - Tailwind tokens
 */
function createTailwindTokens(tokens) {
    if (typeof tokens !== "object" && tokens === null) {
        console.error("This not a valid tokens object");
        return;
    }

    tokens = flattenObj(removeAllExceptValue(tokens));
    let newTokens = {};

    for (const key in tokens) {
        // First remove the "-value from the key name"
        // Second Make sure if the key has default that it is uppercase
        let newKey = key.replace("-value", "").replace("default", "DEFAULT");
        tokens[newKey] = tokens[key];
        delete tokens[key];

        // Check if Reference values are used
        if (tokens[newKey] && tokens[newKey].startsWith('{')) {
            console.warn('Reference value found for', newKey, "with value", tokens[newKey]);
        }

        // Revert the action from flattenObj
        let keys = newKey.split("-");
        createObject(keys, tokens[newKey], newTokens);
    }

    return newTokens;
}

module.exports = {
    createTailwindTokens,
};
