# example-plugin

[![version](https://img.shields.io/github/v/release/flowscripter/template-deno-library?sort=semver)](https://github.com/flowscripter/template-deno-library/releases)
[![build](https://img.shields.io/github/workflow/status/flowscripter/template-deno-library/release-deno-library)](https://github.com/flowscripter/template-deno-library/actions/workflows/release-deno-library.yml)
[![coverage](https://codecov.io/gh/flowscripter/template-deno-library/branch/main/graph/badge.svg?token=EMFT2938ZF)](https://codecov.io/gh/flowscripter/template-deno-library)
[![dependencies](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fupdates%2Fhttps%2Fraw.githubusercontent.com%2Fflowscripter%2Ftemplate-deno-library%2Fmain%2Fmod.ts)](https://github.com/flowscripter/template-deno-library/blob/main/deps.ts)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https://deno.land/x/flowscripter_template_deno_library/mod.ts)
[![license: MIT](https://img.shields.io/github/license/flowscripter/template-deno-library)](https://github.com/flowscripter/template-deno-library/blob/main/LICENSE)

> Example plugin for the
> [dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework).

## Deno Module Usage

```typescript
import { ExampleExtension } from "https://deno.land/x/flowscripter_example_plugin/mod.ts";

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

[API Documentation](https://doc.deno.land/https://deno.land/x/flowscripter_template_deno_library/mod.ts)

## License

MIT © Flowscripter
