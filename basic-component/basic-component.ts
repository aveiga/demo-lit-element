import { LitElement, html, css, customElement, property } from "lit-element";
import "@material/mwc-button/mwc-button.js";
import { localizable } from "../i18n/dist/i18n.js";
import "../themes/theme.css";

@customElement("basic-component")
@localizable("https://i18nmgr.gdp.at.thales", "i18n.json")
export class BasicComponent extends LitElement {
  static styles = css`
    :host {
      color: var(--text-color, black);
      background-color: var(--background-color, white);
    }
  `;

  @property({ type: String })
  paragraphName = "paragraph";

  render() {
    return html`
      <p>A paragraph with name: ${this.localize("ok")}</p>
      <mwc-button class="light" raised label="raised"
        >This is a mwc button</mwc-button
      >
    `;
  }
}
