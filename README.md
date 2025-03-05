# example-plugin

[![version](https://img.shields.io/github/v/release/flowscripter/example-plugin?sort=semver)](https://github.com/flowscripter/example-plugin/releases)
[![build](https://img.shields.io/github/actions/workflow/status/flowscripter/example-plugin/release-bun-library.yml)](https://github.com/flowscripter/example-plugin/actions/workflows/release-bun-library.yml)
[![coverage](https://codecov.io/gh/flowscripter/example-plugin/branch/main/graph/badge.svg?token=EMFT2938ZF)](https://codecov.io/gh/flowscripter/example-plugin)
[![docs](https://img.shields.io/badge/docs-API-blue)](https://flowscripter.github.io/example-plugin/index.html)
[![license: MIT](https://img.shields.io/github/license/flowscripter/example-plugin)](https://github.com/flowscripter/example-plugin/blob/main/LICENSE)

> Example plugin for the
> [dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework)

## Bun Module Usage

Add the module:

`bun add @flowscripter/example-plugin`

Use the module:

```typescript
import { ExampleExtension } from "@flowscripter/example-plugin";

const extension = new ExampleExtension();

extension.sayHello();
```

## Development

Test:

`bun test`

**NOTE**: The following tasks use Deno as it excels at these and Bun does not
currently provide such functionality:

Format:

`deno fmt`

Lint:

`deno lint index.ts src/ tests/`

Generate HTML API Documentation:

`deno doc --html --name=example-plugin index.ts`

## Documentation

### Overview

Refer to the
[dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework)
for an overview of what this example is demonstrating.

### API

Link to auto-generated API docs for the library:

[API Documentation](https://flowscripter.github.io/example-plugin/index.html)

## License

MIT © Flowscripter
