// Values copied from @tailwindcss/typography/src/styles
const round = (num) =>
    num
        .toFixed(7)
        .replace(/(\.[0-9]+?)0+$/, "$1")
        .replace(/\.0$/, "");
const em = (px, base) => `${round(px / base)}em`;

/**
 * Sets a better default for your TailwindCSS typography defaults
 *
 * @deprecated This only used for TailwindCSS typography 0.4 and lower
 */
const proseCleanup = {
    [[
        '[class~="lead"]',
        "strong",
        "ol > li::before",
        "blockquote",
        "h1",
        "h2",
        "h3",
        "h4",
        "figure figcaption",
        "code",
        "a code",
        "thead",
    ].join(", ")]: {
        color: "inherit",
    },
    "ul > li::before": {
        backgroundColor: "currentColor",
    },
};

/**
 * Sets an options to override the text spacing with utility classes
 *
 * @deprecated This only used for TailwindCSS typography 0.4 and lower
 */
const twTypoMargin = {
    "h1:not([class*=mt-])": { marginTop: "0" },
    "h1:not([class*=mb-])": { marginBottom: em(32, 36) },
    "h2:not([class*=mt-])": { marginTop: em(48, 24) },
    "h2:not([class*=mb-])": { marginBottom: em(24, 24) },
    "h3:not([class*=mt-])": { marginTop: em(32, 20) },
    "h3:not([class*=mb-])": { marginBottom: em(12, 20) },
    "h4:not([class*=mt-])": { marginTop: em(24, 16) },
    "h4:not([class*=mb-])": { marginBottom: em(8, 16) },
    "p:not([class*=mt-])": { marginTop: em(20, 16) },
    "p:not([class*=mb-])": { marginBottom: em(20, 16) },
};

/**
 * Prose reset for TailwindCSS Typography plugin (version lower than v5).
 * Version 5 ships with the `:where` selector and does not require this default, if used.
 * Use the proseCleanup instead if your use the modern mode from version 5.
 *
 * @deprecated This only used for TailwindCSS typography 0.4 and lower
 */
const proseDefaults = ({ h1, h2, h3, h4, strong, ...props }) => {
    return {
        ...proseCleanup,
        ...twTypoMargin,
        color: false,
        h1: {
            marginTop: null,
            marginBottom: null,
            ...h1,
        },
        h2: {
            marginTop: null,
            marginBottom: null,
            ...h2,
        },
        h3: {
            marginTop: null,
            marginBottom: null,
            ...h3,
        },
        h4: {
            marginTop: null,
            marginBottom: null,
            ...h4,
        },
        strong: {
            fontWeight: "bolder",
            ...strong,
        },
        ...props,
    };
};

module.exports = {
    proseCleanup,
    twTypoMargin,
    proseDefaults,
};
