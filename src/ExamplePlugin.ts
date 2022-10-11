import {
  EXTENSION_POINT_1,
  ExtensionDescriptor,
  ExtensionFactory,
  ExtensionPoint1,
  log,
  Plugin,
} from "../deps.ts";

export class ExampleExtension implements ExtensionPoint1 {
  public sayHello(): void {
    log.info("hello world");
  }
}

class ExampleExtensionFactory implements ExtensionFactory {
  public create(): Promise<unknown> {
    return Promise.resolve(new ExampleExtension());
  }
}

class ExampleExtensionDescriptor implements ExtensionDescriptor {
  public extensionPoint: string = EXTENSION_POINT_1;

  public factory: ExtensionFactory = new ExampleExtensionFactory();

  public extensionData = new Map<string, string>([[
    "extension_foo",
    "extension_bar",
  ]]);
}

export default class ExamplePlugin implements Plugin {
  public extensionDescriptors: ExtensionDescriptor[] = [
    new ExampleExtensionDescriptor(),
  ];

  public pluginData = new Map<string, string>([["plugin_foo", "plugin_bar"]]);
}
