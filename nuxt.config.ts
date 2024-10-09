// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["usebootstrap"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Dog Park App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Dog Park App is a social network for dogs and their owners.",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Dog Park App is a social network for dogs and their owners.",
        },
        { name: "keywords", content: "dogs, parks, hiking, weather, reviews," },
      ],
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css",
      //     integrity:
      //       "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
      //     crossorigin: "anonymous",
      //   },
      // ],
      // script: [
      //   {
      //     src: "https://code.jquery.com/jquery-3.7.1.min.js",
      //     integrity: "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=",
      //     crossorigin: "anonymous",
      //   },
      //   {
      //     src: "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js",
      //     integrity:
      //       "sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa",
      //     crossorigin: "anonymous",
      //   },
      // ],
    },
  },
});
