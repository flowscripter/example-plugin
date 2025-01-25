import { assertEquals } from "@std/assert";
import { default as examplePlugin, exampleExtension } from "../mod.ts";
import type { ExtensionPoint1 } from "@flowscripter/example-plugin-api";

Deno.test("Access extension implementation via plugin", async () => {
  assertEquals(examplePlugin.pluginData?.get("plugin_foo"), "plugin_bar");

  const extensionDescriptor = examplePlugin.extensionDescriptors[0];

  assertEquals(
    extensionDescriptor.extensionData?.get("extension_foo"),
    "extension_bar",
  );

  const extension = await extensionDescriptor.factory
    .create() as ExtensionPoint1;

  extension.sayHello();
});

Deno.test("Access extension implementation directly", () => {
  exampleExtension.sayHello();
});
