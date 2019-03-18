import { html, fixture, expect } from "@open-wc/testing";

import "../dist/basic-component.js";

describe("<basic-component>", () => {
  it("has a default property paragraphName", async () => {
    const el = await fixture("<basic-component></basic-component>");
    expect(el.paragraphName).to.equal("paragraph");
  });

  it("allows property paragraphName to be overwritten", async () => {
    const el = await fixture(html`
      <basic-component .paragraphName=${"different"}></basic-component>
    `);
    expect(el.paragraphName).to.equal("different");
  });
});
