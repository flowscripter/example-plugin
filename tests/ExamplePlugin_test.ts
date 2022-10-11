import { assertEquals } from "./test_deps.ts";
import {
  default as ExamplePlugin,
  ExampleExtension,
} from "../src/ExamplePlugin.ts";
import { ExtensionPoint1 } from "../deps.ts";

Deno.test("Access extension implementation via plugin", async () => {
  const plugin = new ExamplePlugin();

  assertEquals(plugin.pluginData?.get("plugin_foo"), "plugin_bar");

  const extensionDescriptor = plugin.extensionDescriptors[0];

  assertEquals(
    extensionDescriptor.extensionData?.get("extension_foo"),
    "extension_bar",
  );

  const extension = await extensionDescriptor.factory
    .create() as ExtensionPoint1;

  extension.sayHello();
});

Deno.test("Access extension implementation directly", () => {
  const extension = new ExampleExtension();

  extension.sayHello();
});
