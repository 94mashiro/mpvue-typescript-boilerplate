import { Component, Vue } from "vue-property-decorator";
const debug = require("debug")('log:App')

declare module "vue/types/vue" {
  interface Vue {
    $mp: any
  }
}

@Component({
  mpType: 'app'
} as any)
class App extends Vue {
  onLaunch() {
    let opt = this.$root.$mp.appOptions
    debug('onLaunch', opt)
  }
  onShow() {
    debug('onShow')
  }
  onHide() {
    debug('onHide')
  }
  mounted() {
    debug('mounted')
  }
}

export default App
