# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Warning log for Reference values in tokens, if used

## [1.2.0] - 2023-07-26
### Added
- `@fylgja/tailwindcss-plugin-cssprops` as sub package for easier importing,
  also plays really well with our own `createTailwindTokens()` function

### Changed
- Marked the `proseCleanup` as deprecated, since we are dropping Tailwind v2 support in a later version
- Marked the `twTypoMargin` as deprecated, since we are dropping Tailwind v2 support in a later version
- Marked the `proseDefaults()` as deprecated, since we are dropping Tailwind v2 support in a later version

## [1.1.0] - 2022-01-11
### Added
- `createTailwindTokens()` function, to convert Figma or Sketch design tokens to Tailwind compatible tokens

### Changed
- Clean up the index and separate each function into its own file.

## [1.0.0] - 2022-12-16
Initial release 🎉
