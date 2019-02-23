# demo-lit-element

Demo project showcasing common UI use cases using LitElement

# TODO

- uglify ✅ (done with rollup-plugin-terser)
- separate dev and production builds (no sourcemaps, no serve and livereload) ✅
- remove rollup babel plugins (no longer necessary, we're using TypeScript) ✅
- typescript decorators (for properties and web component) ✅
- custom decorators ✅
- i18n (to be built using custom decorators) ✅
- properties (on demo with observer) ✅ ⚠️ (observers are not a thing with LitElement, we need to watch for attribute changes instead, like in React)
- material web components ✅
- theme material web components
- vaadin-grid
