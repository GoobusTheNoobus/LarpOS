import {applications} from '../apps';

import {Window, type WindowOptions} from './Window';

export class WindowManager {
  private windows: Array<Window>;

  constructor() {
    this.windows = new Array<Window>();
  }

  create(options: WindowOptions): Window {
    const window = new Window(options);

    this.windows.push(window);
    window.create();
    return window;
  }

  launch(app: string): Window|null {
    if (!Object.hasOwn(applications, app)) {
      console.error(`Unknown application: ${app}`);
      return null;
    }

    const definition = applications[app as keyof typeof applications];

    return this.create({
      title: definition.title,
      width: definition.width,
      height: definition.height,

      // Calculate screen center
      x: window.innerWidth / 2 - definition.width / 2,
      y: window.innerHeight / 2 - definition.height / 2,
    })
  }
}