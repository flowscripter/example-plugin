# example-plugin

[![version](https://img.shields.io/github/v/release/flowscripter/example-plugin?sort=semver)](https://github.com/flowscripter/example-plugin/releases)
[![build](https://img.shields.io/github/actions/workflow/status/flowscripter/example-plugin/release-deno-library.yml)](https://github.com/flowscripter/example-plugin/actions/workflows/release-deno-library.yml)
[![coverage](https://codecov.io/gh/flowscripter/example-plugin/branch/main/graph/badge.svg?token=EMFT2938ZF)](https://codecov.io/gh/flowscripter/example-plugin)
[![dependencies](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fupdates%2Fhttps%2Fraw.githubusercontent.com%2Fflowscripter%2Fexample-plugin%2Fmain%2Fmod.ts)](https://github.com/flowscripter/example-plugin/blob/main/deps.ts)
[![deno doc](https://doc.deno.land/badge.svg)](https://jsr.io/@flowscripter/example-plugin/doc)
[![license: MIT](https://img.shields.io/github/license/flowscripter/example-plugin)](https://github.com/flowscripter/example-plugin/blob/main/LICENSE)

> Example plugin for the
> [dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework)

## Deno Module Usage

```typescript
import { ExampleExtension } from "@flowscripter/example-plugin";

const extension = new ExampleExtension();

extension.sayHello();
```

## Development

Test: `deno test -A --unstable`

Lint: `deno fmt`

## Documentation

### Overview

Refer to the
[dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework)
for an overview of what this example is demonstrating.

### API

Link to auto-generated API docs for the library:

[API Documentation](https://jsr.io/@flowscripter/example-plugin/doc)

## License

MIT © Flowscripter
