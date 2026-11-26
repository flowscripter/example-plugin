# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Example plugin for the [dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework). Implements a minimal `Plugin` with a single `ExtensionPoint1` extension, bundled as a Bun module for dynamic import.

## Commands

```bash
# Install
bun install

# Test
bun test

# Bundle for distribution
bun build index.ts --outdir ./dist --entry-naming bundle.js --minify

# Format
bunx oxfmt

# Lint
bunx oxlint index.ts src/ tests/

# Generate HTML API Documentation
bunx typedoc --readme none index.ts
```

## Architecture

- `index.ts` -- public entry point; re-exports `examplePlugin` (default) and `exampleExtension` from `src/ExamplePlugin.ts`
- `src/ExamplePlugin.ts` -- implements `Plugin` with one `ExtensionDescriptor` wrapping an `ExtensionPoint1` that logs "hello world"; also exports `exampleExtension` directly
- `tests/ExamplePlugin_test.ts` -- Bun tests verifying plugin metadata, extension factory, and direct extension access
- `dist/bundle.js` -- build output (not committed); consumed via unpkg CDN or dynamic import
