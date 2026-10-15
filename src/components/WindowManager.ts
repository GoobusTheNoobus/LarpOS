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

    return this.create({
      title: app,
      width: 600,
      height: 400,

      // Calculate screen center
      x: window.innerWidth / 2 - 600 / 2,
      y: window.innerHeight / 2 - 400 / 2,
    })
  }
}