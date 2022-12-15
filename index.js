exports.rootPath = "../../../../../../..";

exports.breakpoints = {
  xs: "420px",
  sm: "640px",
  "sm-max": { max: "639px" },
  md: "768px",
  "md-max": { max: "767px" },
  lg: "1024px",
  "lg-max": { max: "1023px" },
  xl: "1280px",
  "xl-max": { max: "1279px" },
  xxl: "1440px",
  "xxl-max": { max: "1439px" },
  sl: "2200px",
};

// Unset's any colors for the default prose
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
exports.proseCleanup = proseCleanup;

// Values copied from @tailwindcss/typography/src/styles
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const em = (px, base) => `${round(px / base)}em`;

exports.unsetTypoMargin = {
  marginTop: null,
  marginBottom: null,
};

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
exports.twTypoMargin = twTypoMargin;

exports.proseDefaults = {
  ...proseCleanup,
  color: false,
  h1: {
    ...unsetTypoMargin,
    fontFamily: "var(--family-heading)",
  },
  h2: {
    ...unsetTypoMargin,
    fontFamily: "var(--family-heading)",
  },
  h3: {
    ...unsetTypoMargin,
    fontFamily: "var(--family-heading)",
  },
  h4: {
    ...unsetTypoMargin,
    fontFamily: "var(--family-heading)",
  },
  h5: {
    fontFamily: "var(--family-heading)",
  },
  h6: {
    fontFamily: "var(--family-heading)",
  },
  strong: {
    fontWeight: "bolder",
  },
  ...twTypoMargin,
};
