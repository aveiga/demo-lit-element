export function localizable(url, fallback) {
  let hoLocalization = {};

  return function<T extends { new (...args: any[]): {} }>(constructor: T) {
    let newConstructor = class extends constructor {
      localizeURL = url;
      localizeURLFallback = fallback;
      locale = "en";
      localization = hoLocalization;

      constructor(args: any[]) {
        super(args);

        getLocalization(url, fallback).then(localization => {
          // newConstructor.localization = localization;
          this.localization = localization;
          this.requestUpdate();
        });
      }

      localize(key) {
        if (
          this.localization &&
          this.localization[this.locale] &&
          this.localization[this.locale][key]
        ) {
          return this.localization[this.locale][key];
        }
      }
    };

    return newConstructor;
  };
}

async function getLocalization(url, fallback) {
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.info(
        "🌍Cannot find i18n server, getting localization from fallback location."
      );
      return fetch(fallback)
        .then(res => res.json())
        .catch(err => {
          console.info("🌍Cannot find fallback localization file.");
          return {};
        });
    });
}
