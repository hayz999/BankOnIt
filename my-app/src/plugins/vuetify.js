import Vue from 'vue'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
  theme: { 
    primary: "#00C853", 
    secondary: "#A5D6A7", 
    accent: "#004D40", 
    error: "#f44336", 
    warning: "#ffeb3b", 
    info: "#69F0AE", 
    success: "#4caf50" }
})
