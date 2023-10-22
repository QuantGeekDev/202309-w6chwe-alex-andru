abstract class Component {
  element: Element;

  constructor(
    protected parentElement: Element,
    tagName: string,
    className: string,
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }

  abstract populate(): void;
}

export default Component;
