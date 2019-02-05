import { LitElement, html, css } from "lit-element";
import "../themes/theme.css";

class BasicComponent extends LitElement {
  static styles = css`
    :host {
      color: var(--text-color, black);
      background-color: var(--background-color, white);
    }
  `;

  render() {
    return html`
      <p>A paragraph yeah</p>
    `;
  }
}
customElements.define("basic-component", BasicComponent);
