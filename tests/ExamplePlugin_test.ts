import { describe, expect, test } from "bun:test";
import { default as examplePlugin, exampleExtension } from "../index.ts";
import type { ExtensionPoint1 } from "@flowscripter/example-plugin-api";

describe("ExamplePlugin Tests", () => {
  test("Access extension implementation via plugin", async () => {
    expect(examplePlugin.pluginData?.get("plugin_foo")).toEqual("plugin_bar");

    const extensionDescriptor = examplePlugin.extensionDescriptors[0];

    expect(
      extensionDescriptor.extensionData?.get("extension_foo"),
    ).toEqual(
      "extension_bar",
    );

    const extension = await extensionDescriptor.factory
      .create() as ExtensionPoint1;

    extension.sayHello();
  });

  test("Access extension implementation directly", () => {
    exampleExtension.sayHello();
  });
});
