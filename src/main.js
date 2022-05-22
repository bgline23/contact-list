import { createApp } from "vue";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createVuetify } from "vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import '@/assets/style.css'
import '@mdi/font/css/materialdesignicons.css'

loadFonts();

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App).use(router).use(store).use(vuetify).mount("#app");
