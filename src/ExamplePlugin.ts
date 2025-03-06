import {
  EXTENSION_POINT_1,
  type ExtensionPoint1,
} from "@flowscripter/example-plugin-api";
import type {
  ExtensionDescriptor,
  ExtensionFactory,
  Plugin,
} from "@flowscripter/dynamic-plugin-framework";

export const exampleExtension: ExtensionPoint1 = {
  sayHello: () => {
    console.info("hello world");
  },
};

const exampleExtensionFactory: ExtensionFactory = {
  create: () => {
    return Promise.resolve(exampleExtension);
  },
};

const exampleExtensionDescriptor: ExtensionDescriptor = {
  extensionPoint: EXTENSION_POINT_1,

  factory: exampleExtensionFactory,

  extensionData: new Map<string, string>([[
    "extension_foo",
    "extension_bar",
  ]]),
};

const examplePlugin: Plugin = {
  extensionDescriptors: [
    exampleExtensionDescriptor,
  ],

  pluginData: new Map<string, string>([["plugin_foo", "plugin_bar"]]),
};

export default examplePlugin;
