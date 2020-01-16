import Vue from 'vue';
import iView from 'iview';
import App from './App.vue'
import router from './router'
import store from './store'
import singleSpaVue from "single-spa-vue";
import 'iview/dist/styles/iview.css'

Vue.use(iView);
Vue.config.productionTip = false

const vueOptions = {
    el: "#mfe",
    router,
    store,
    render: h => h(App)
};

// 判断当前页面使用singleSpa应用,不是就渲染
if (!window['mfe-pack']) {
    delete vueOptions.el;
    new Vue(vueOptions).$mount('#app');
}

// singleSpaVue包装一个vue微前端服务对象
const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: vueOptions
});

export const bootstrap = vueLifecycles.bootstrap; // 启动时
export const mount = vueLifecycles.mount; // 挂载时
export const unmount = vueLifecycles.unmount; // 卸载时

export default vueLifecycles;
