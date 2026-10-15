export interface WindowOptions {
  title: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

export class Window {
  element: HTMLElement|null = null;
  options: WindowOptions;

  constructor(options: WindowOptions) {
    this.options = options;
  }

  create(): void {
    if (this.element !== null) {
      return;
    }

    const template =
        document.getElementById('window-template') as HTMLTemplateElement;
    const desktop = document.getElementById('desktop');

    if (!template || !desktop) {
      throw new Error('LarpOS: Window template or desktop not found');
    }

    const element =
        template.content.firstElementChild!.cloneNode(true) as HTMLElement;

    element.classList.add('window');

    element.style.width = `${this.options.width}px`;
    element.style.height = `${this.options.height}px`;
    element.style.left = `${this.options.x}px`;
    element.style.top = `${this.options.y}px`;

    (element.querySelector('.window-title') as HTMLSpanElement).textContent =
        this.options.title;

    if (!desktop) {
      throw new Error('LarpOS: Desktop element not found');
    }

    document.body.appendChild(element);

    element.querySelector('.close-button')?.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) {
        throw new Error('LarpOS: Clicked app isn\'t an element');
      }

      element.remove();
      this.element = null;
    })

    this.element = element;
  }
}