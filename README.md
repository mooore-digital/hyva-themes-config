# Mooore - Hyva Themes Config

Hyvä-themes TailwindCSS utility functions

This contains our shared defaults,
for the Hyva Tailwind config

## Installation

```bash
npm install @mooore/hyva-modules
```

Then include the component in to your code via;

```js
const { rootPath, breakpoints, proseDefaults } = require("@mooore/hyva-modules");

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
        extend: {
            typography: {
                DEFAULT: {
                    css: proseDefaults({
                        h1: {
                            fontWeight: 900,
                        },
                        h2: {
                            fontWeight: 700,
                        },
                        h3: {
                            fontWeight: 500,
                        },
                    }),
                },
            },
        }
    }
});
```

## How to use

This package offers serval helpers, to make it easier to build your Hyva Tailwind config.

To see what is available see the `index.js`
