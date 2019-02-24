import { LitElement, html, css, customElement, property } from "lit-element";
import { localizable } from "../i18n/dist/i18n.js";
import "./node_modules/@vaadin/vaadin-grid/all-imports.js";
import "../themes/theme.css";

@customElement("grid-component")
@localizable("https://i18nmgr.gdp.at.thales", "i18n.json")
export class GridComponent extends LitElement {
  static styles = css`
    :host {
    }
  `;

  @property({ type: Number })
  size = 200;

  dataProvider = (params, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      callback(JSON.parse(xhr.responseText).result);
    };
    var index = params.page * params.pageSize;
    xhr.open(
      "GET",
      "https://demo.vaadin.com/demo-data/1.0/people?index=" +
        index +
        "&count=" +
        params.pageSize,
      true
    );
    xhr.send();
  };

  render() {
    return html`
      <vaadin-grid
        id="grid"
        aria-label="Remote Data Example"
        .size="${this.size}"
        .dataProvider="${this.dataProvider}"
      >
        <vaadin-grid-column path="firstName"></vaadin-grid-column>
        <vaadin-grid-column path="lastName"></vaadin-grid-column>
        <vaadin-grid-column path="email"></vaadin-grid-column>
      </vaadin-grid>
    `;
  }
}
