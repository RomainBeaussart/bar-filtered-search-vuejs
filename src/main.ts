import Vue from 'vue';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import App from './App.vue';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

Vue.config.productionTip = false;

Vue.component('VueSlider', VueSlider)

Vue.use(Vuesax, {
    colors: {
        primary: '#4F5D75',
        secondary: '#EF8354',
        warn: '#EF8354',
        background: '#FFFFFF',
        subtitle: '#BFC0C0',
        border: '#2D3142'
    }
})

new Vue({
    render: h => h(App)
} as any).$mount('#app');
