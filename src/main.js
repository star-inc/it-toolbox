import Vue from 'vue'
import App from './App.vue'

// import VueMaterial from 'vue-material'
import {
    MdApp,
    MdToolbar
} from 'vue-material/dist/components'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-dark.css'

// Vue.use(VueMaterial)
Vue.use(MdApp)
Vue.use(MdToolbar)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')