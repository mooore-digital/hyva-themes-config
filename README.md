# Mooore - Hyva Themes Config

Introducing Hyvä-Themes TailwindCSS Utility Functions,
your go-to collection of shared defaults for the Hyvä Tailwind config.

Enhance your web development projects with ease using these powerful utility functions.

Discover the simplicity and efficiency of TailwindCSS like never before. Feel free to dive in and explore the possibilities!

## Installation

```bash
npm install @mooore/hyva-modules
```

after this include the functions and variables in to your code via;

```js
const { rootPath, breakpoints, createTailwindTokens, cssprops } = require("@mooore/hyva-modules");
const { colors } = createTailwindTokens(require("./figma-tokens.json"));

module.exports = hyvaModules.mergeTailwindConfig({
    purge: {
        content: [
            "../../**/*.phtml",
            `${rootPath}/app/code/**/*.phtml`,
            `${rootPath}/vendor/hyva-themes/magento2-default-theme/**/*.phtml`
        ],
    },
    theme: {
        screens: breakpoints,
        theme: {
            extend: {
                color: {
                    primary: {
                        DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
                    }
                }
            }
        },
        plugins: [
            cssprops({
                tokens: {
                    color: {
                        primary: colors.primary,
                    },
                },
            }),
        ],
    }
});
```

## How to use

This package offers several helpers to simplify the process of building your Hyvä Tailwind config.

To see what is available, refer to the index.js file and explore the contents of the src folder.

These resources will guide you through the functionalities at your disposal,
making it a breeze to customize your TailwindCSS setup.

Simplify your workflow and take advantage of the convenience brought to you by our utility functions.

Feel free to dive in and explore the possibilities!

### CSSProps Function

The CSSProps function harnesses the capabilities of the [TailwindCSS Plugin Fylgja CSSProps](https://github.com/fylgja/tailwindcss-plugin-cssprops).

For detailed instructions on how to integrate it within your Tailwind config,
kindly consult the documentation available in the provided link.

This will guide you through the seamless process of leveraging the power of CSSProps to enhance your TailwindCSS experience effectively.
